

export enum AccessPermissions {
    EXECUTE_BY_OTHERS = 1 << 0,
    WRITE_BY_OTHERS = 1 << 1,
    READ_BY_OTHERS = 1 << 2,
    ALL_BY_OTHERS = EXECUTE_BY_OTHERS | WRITE_BY_OTHERS | READ_BY_OTHERS,

    EXECUTE_BY_GROUP = 1 << 3,
    WRITE_BY_GROUP = 1 << 4,
    READ_BY_GROUP = 1 << 5,
    ALL_BY_GROUP = EXECUTE_BY_GROUP | WRITE_BY_GROUP | READ_BY_GROUP,

    EXECUTE_BY_OWNER = 1 << 6,
    WRITE_BY_OWNER = 1 << 7,
    READ_BY_OWNER = 1 << 8,
    ALL_BY_OWNER = EXECUTE_BY_OWNER | WRITE_BY_OWNER | READ_BY_OWNER,

    DEFAULT = WRITE_BY_OTHERS | READ_BY_OTHERS | WRITE_BY_GROUP | READ_BY_GROUP | WRITE_BY_OWNER | READ_BY_OWNER,

    ALL = ALL_BY_OTHERS | ALL_BY_GROUP | ALL_BY_OWNER,

    // StickyBit       = 1 << 9
}
