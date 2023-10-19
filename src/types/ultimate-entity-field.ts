import { UltimateEntityFieldTypes } from "./ultimate-entity-field-types";

export enum UltimateEntityFieldComponents {
  INPUT = "INPUT",
  TEXT_AREA = "TEXT_AREA",
  SWITCH = "SWITCH",
  CHECBKOX = "CHECBKOX",
  RADIO_GROUP = "RADIO_GROUP",
  SELECT = "SELECT",
  MULTI_SELECT = "MULTI_SELECT",
  IMAGE_INPUT = "IMAGE_INPUT",
  MULTI_STRING_INPUT = "MULTI_STRING_INPUT",
  DATE_INPUT = "DATE_INPUT",
  MARKDOWN_INPUT = "MARKDOWN_INPUT",
  COLOR_INPUT = "COLOR_INPUT",
}

// TODO: transform components into enum
export type UltimateEntityFieldTypeMap = {
  [UltimateEntityFieldTypes.MANY_TO_ONE_RELATION_SELECT]: UltimateEntityFieldComponents.MULTI_SELECT;
  [UltimateEntityFieldTypes.COLOR]: UltimateEntityFieldComponents.COLOR_INPUT;
  [UltimateEntityFieldTypes.STRING]: UltimateEntityFieldComponents.INPUT;
  [UltimateEntityFieldTypes.TEXT]: UltimateEntityFieldComponents.TEXT_AREA;
  [UltimateEntityFieldTypes.BOOLEAN]:
    | UltimateEntityFieldComponents.SWITCH
    | UltimateEntityFieldComponents.CHECBKOX;
  [UltimateEntityFieldTypes.IMAGE]: UltimateEntityFieldComponents.IMAGE_INPUT;
  [UltimateEntityFieldTypes.UNKNOWN]: UltimateEntityFieldComponents.INPUT;
  [UltimateEntityFieldTypes.ONE_TO_MANY_RELATION_SELECT]:
    | UltimateEntityFieldComponents.SELECT
    | UltimateEntityFieldComponents.RADIO_GROUP;
  [UltimateEntityFieldTypes.SELECT]:
    | UltimateEntityFieldComponents.SELECT
    | UltimateEntityFieldComponents.RADIO_GROUP;
  [UltimateEntityFieldTypes.STRING_ARRAY]: UltimateEntityFieldComponents.MULTI_STRING_INPUT;
  [UltimateEntityFieldTypes.DATE]: UltimateEntityFieldComponents.DATE_INPUT;
  [UltimateEntityFieldTypes.MARKDOWN]: UltimateEntityFieldComponents.MARKDOWN_INPUT;
};

export type UltimateEntityFieldDefaultValueMap = {
  [UltimateEntityFieldTypes.STRING]: string;
  [UltimateEntityFieldTypes.TEXT]: string;
  [UltimateEntityFieldTypes.SELECT]: string;
  [UltimateEntityFieldTypes.BOOLEAN]: boolean;
  [UltimateEntityFieldTypes.IMAGE]: string;
  [UltimateEntityFieldTypes.COLOR]: string;
  [UltimateEntityFieldTypes.STRING_ARRAY]: string[];
  [UltimateEntityFieldTypes.DATE]: Date;
  [UltimateEntityFieldTypes.ONE_TO_MANY_RELATION_SELECT]: string;
  [UltimateEntityFieldTypes.MANY_TO_ONE_RELATION_SELECT]: string[];
  [UltimateEntityFieldTypes.MARKDOWN]: string;
  [UltimateEntityFieldTypes.UNKNOWN]: any;
};

export interface UltimateFieldOption {
  value: string;
  label: string;
  description: string;
}

export type UltimateFieldWithType<T extends UltimateEntityFieldTypes> = {
  id: string;
  type: T;
  defaultValue?: UltimateEntityFieldDefaultValueMap[T];
  variant?: UltimateEntityFieldTypeMap[T];
  /**
   * not implemented yet
   */
  note?: string;
  name?: string;
  description?: string;
  /**
   * table name of the target relation, only for ONE_TO_MANY_RELATION_SELECT types
   * target relation must be an ultimate entity too
   * note: in future, even non ultimate entities gonna be able to use it
   */
  isRelation?: boolean;
  relationEntityId?: string;
  /**
   * only for select components
   */
  options?: UltimateFieldOption[];
};

export type UltimateEntityField =
  | UltimateFieldWithType<UltimateEntityFieldTypes.MANY_TO_ONE_RELATION_SELECT>
  | UltimateFieldWithType<UltimateEntityFieldTypes.STRING>
  | UltimateFieldWithType<UltimateEntityFieldTypes.COLOR>
  | UltimateFieldWithType<UltimateEntityFieldTypes.TEXT>
  | UltimateFieldWithType<UltimateEntityFieldTypes.BOOLEAN>
  | UltimateFieldWithType<UltimateEntityFieldTypes.IMAGE>
  | UltimateFieldWithType<UltimateEntityFieldTypes.ONE_TO_MANY_RELATION_SELECT>
  | UltimateFieldWithType<UltimateEntityFieldTypes.SELECT>
  | UltimateFieldWithType<UltimateEntityFieldTypes.STRING_ARRAY>
  | UltimateFieldWithType<UltimateEntityFieldTypes.DATE>
  | UltimateFieldWithType<UltimateEntityFieldTypes.MARKDOWN>
  | UltimateFieldWithType<UltimateEntityFieldTypes.UNKNOWN>;
