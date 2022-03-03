// To parse this data:
//
//   import { Convert, Child } from "./file";
//
//   const child = Convert.toChild(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
import {Classroom} from "./classroom";
import {Adelphie} from "./adelphie";
import {Diet} from "./diet";
import {GradeLevel} from "./grade-level";
export interface Child {
    id?:         number;
    name?:       string;
    surname?:    string;
    birthday?:   Date;
    classroom?:  Classroom;
    adelphie?:   Adelphie;
    gradeLevel?: GradeLevel;
    diets?:      Diet[];
    periodModel?:   PeriodModel[];
    presenceModel?: PresenceModel[]
    monthPaid?:  ChildMonthPaid[];
}

export interface ChildMonthPaid {
    id?:    number;
    date?:  Date;
    cost?:  number;
    payed?: boolean;
    child?: ChildClass;
}

export interface ChildClass {
    id?:            number;
    name?:          string;
    surname?:       string;
    birthday?:      Date;
    classroom?:     Classroom;
    adelphie?:      Adelphie;
    gradeLevel?:    GradeLevel;
    diets?:         Diet[];
    periodModel?:   PeriodModel[];
    presenceModel?: PresenceModel[];
    monthPaid?:     ChildMonthPaidClass[];
}

export interface ChildMonthPaidClass {
    id?:    number;
    date?:  Date;
    cost?:  number;
    payed?: boolean;
    child?: string;
}

export interface PeriodModel {
    id?:           number;
    serviceId?:    number;
    begin?:        Date;
    end?:          Date;
    startBilling?: Date;
    child?:        string;
}

export interface PresenceModel {
    id?:        number;
    name?:      string;
    presence?:  boolean;
    date?:      Date;
    serviceId?: number;
    child?:     string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toChild(json: string): Child {
        return cast(JSON.parse(json), r("Child"));
    }

    public static childToJson(value: Child): string {
        return JSON.stringify(uncast(value, r("Child")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Child": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, Date) },
        { json: "classroom", js: "classroom", typ: u(undefined, r("Classroom")) },
        { json: "adelphie", js: "adelphie", typ: u(undefined, r("Adelphie")) },
        { json: "gradeLevel", js: "gradeLevel", typ: u(undefined, r("GradeLevel")) },
        { json: "diets", js: "diets", typ: u(undefined, a(r("Diet"))) },
        { json: "monthPaid", js: "monthPaid", typ: u(undefined, a(r("ChildMonthPaid"))) },
    ], false),
    "Adelphie": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "referingParentName", js: "referingParentName", typ: u(undefined, "") },
        { json: "referingParentSurname", js: "referingParentSurname", typ: u(undefined, "") },
        { json: "telephoneNumber", js: "telephoneNumber", typ: u(undefined, "") },
        { json: "postalAdress", js: "postalAdress", typ: u(undefined, "") },
    ], false),
    "Classroom": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "professor", js: "professor", typ: u(undefined, "") },
    ], false),
    "Diet": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "children", js: "children", typ: u(undefined, a("")) },
    ], false),
    "GradeLevel": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "level", js: "level", typ: u(undefined, "") },
    ], false),
    "ChildMonthPaid": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "date", js: "date", typ: u(undefined, Date) },
        { json: "cost", js: "cost", typ: u(undefined, 0) },
        { json: "payed", js: "payed", typ: u(undefined, true) },
        { json: "child", js: "child", typ: u(undefined, r("ChildClass")) },
    ], false),
    "ChildClass": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "surname", js: "surname", typ: u(undefined, "") },
        { json: "birthday", js: "birthday", typ: u(undefined, Date) },
        { json: "classroom", js: "classroom", typ: u(undefined, r("Classroom")) },
        { json: "adelphie", js: "adelphie", typ: u(undefined, r("Adelphie")) },
        { json: "gradeLevel", js: "gradeLevel", typ: u(undefined, r("GradeLevel")) },
        { json: "diets", js: "diets", typ: u(undefined, a(r("Diet"))) },
        { json: "periodModel", js: "periodModel", typ: u(undefined, a(r("PeriodModel"))) },
        { json: "presenceModel", js: "presenceModel", typ: u(undefined, a(r("PresenceModel"))) },
        { json: "monthPaid", js: "monthPaid", typ: u(undefined, a(r("ChildMonthPaidClass"))) },
    ], false),
    "ChildMonthPaidClass": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "date", js: "date", typ: u(undefined, Date) },
        { json: "cost", js: "cost", typ: u(undefined, 0) },
        { json: "payed", js: "payed", typ: u(undefined, true) },
        { json: "child", js: "child", typ: u(undefined, "") },
    ], false),
    "PeriodModel": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "serviceId", js: "serviceId", typ: u(undefined, 0) },
        { json: "begin", js: "begin", typ: u(undefined, Date) },
        { json: "end", js: "end", typ: u(undefined, Date) },
        { json: "startBilling", js: "startBilling", typ: u(undefined, Date) },
        { json: "child", js: "child", typ: u(undefined, "") },
    ], false),
    "PresenceModel": o([
        { json: "id", js: "id", typ: u(undefined, 0) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "presence", js: "presence", typ: u(undefined, true) },
        { json: "date", js: "date", typ: u(undefined, Date) },
        { json: "serviceId", js: "serviceId", typ: u(undefined, 0) },
        { json: "child", js: "child", typ: u(undefined, "") },
    ], false),
};
