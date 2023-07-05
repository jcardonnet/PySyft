"use strict";
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.KVIterable = exports._capnpFileId = void 0;
/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */
const capnp = require("capnp-ts");
const capnp_ts_1 = require("capnp-ts");
exports._capnpFileId = BigInt("0xb4973e09eff2e05e");
export class KVIterable extends capnp_ts_1.Struct {
    adoptKeys(value) { capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(0, this)); }
    disownKeys() { return capnp_ts_1.Struct.disown(this.getKeys()); }
    getKeys() { return capnp_ts_1.Struct.getList(0, capnp.DataList, this); }
    hasKeys() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(0, this)); }
    initKeys(length) { return capnp_ts_1.Struct.initList(0, capnp.DataList, length, this); }
    setKeys(value) { capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(0, this)); }
    adoptValues(value) { capnp_ts_1.Struct.adopt(value, capnp_ts_1.Struct.getPointer(1, this)); }
    disownValues() { return capnp_ts_1.Struct.disown(this.getValues()); }
    getValues() { return capnp_ts_1.Struct.getList(1, KVIterable._Values, this); }
    hasValues() { return !capnp_ts_1.Struct.isNull(capnp_ts_1.Struct.getPointer(1, this)); }
    initValues(length) { return capnp_ts_1.Struct.initList(1, KVIterable._Values, length, this); }
    setValues(value) { capnp_ts_1.Struct.copyFrom(value, capnp_ts_1.Struct.getPointer(1, this)); }
    toString() { return "KVIterable_" + super.toString(); }
}
exports.KVIterable = KVIterable;
KVIterable._capnp = { displayName: "KVIterable", id: "edaa1b80ab4d437e", size: new capnp_ts_1.ObjectSize(0, 2) };
KVIterable._Values = capnp.PointerList(capnp.DataList);
