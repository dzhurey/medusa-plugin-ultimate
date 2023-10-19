import { ControlProps } from "..";

import useUltimateEntityDocuments from "../../../../hooks/ultimate-entities-documents/use-ultimate-entity-documents";

import ErrorLayout from "../../../layout/error-layout";
import Skeleton from "../../../layout/skeleton";

type HTMLElementType = HTMLSelectElement;

interface ManyToOneRelationSelectControlProps
  extends Omit<
      React.InputHTMLAttributes<HTMLElementType>,
      "value" | "defaultValue" | "size" | "onChange"
    >,
    ControlProps<string[]> {
  relationEntityId: string;
}

const DEFAULT_ONE_TO_MANY_SELECT_CONTROL_PLACEHOLDER = "Select a relation.";

const ManyToOneRelationSelectControl = ({
  value,
  defaultValue,
  onValueChange,
  relationEntityId,
  ...props
}: ManyToOneRelationSelectControlProps) => {
  const { data, isLoading, error } =
    useUltimateEntityDocuments(relationEntityId);

  function handleValueChange(value: string[]) {
    onValueChange(value);
  }

  if (isLoading) return <Skeleton className="w-full h-10" />;

  if (error) return <ErrorLayout />;

  const documents = data.documents;

  return (
    <div>
      {value.map((v, vI) => {
        return (
          <div key={"many-to-many-relation-" + vI}>selected-document-1</div>
        );
      })}
      <div>-------------------</div>
      <div>
        <div>
          custom select menu, drawer (if document is already selected by another
          one don't show it here or if it's already selected by us + show by
          whom it's selected)
        </div>
        <div>
          create new one------, creation drawer + onCreate return the id and
          assign it
        </div>
      </div>
    </div>
  );

  // return (
  //   <Select
  //     value={value}
  //     onValueChange={handleValueChange}
  //     defaultValue={defaultValue}
  //   >
  //     <Select.Trigger
  //       placeholder={DEFAULT_ONE_TO_MANY_SELECT_CONTROL_PLACEHOLDER}
  //     >
  //       <Select.Value
  //         placeholder={DEFAULT_ONE_TO_MANY_SELECT_CONTROL_PLACEHOLDER}
  //       />
  //     </Select.Trigger>
  //     <Select.Content>
  //       {documents.map((document, documentIndex) => {
  //         return (
  //           <Select.Item
  //             value={document.id}
  //             key={"select-one-to-many-relation-item-" + documentIndex}
  //           >
  //             {useDocumentName(document)}
  //           </Select.Item>
  //         );
  //       })}
  //     </Select.Content>
  //   </Select>
  // );
};

export default ManyToOneRelationSelectControl;