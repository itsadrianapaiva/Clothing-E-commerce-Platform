import { Input } from "../ui/input";
import { Select } from "../ui/select";
import { SelectTrigger } from "@radix-ui/react-select";
import { SelectValue } from "@radix-ui/react-select";
import { SelectContent } from "@radix-ui/react-select";
import { SelectItem } from "@radix-ui/react-select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) {
  const types = {
    INPUT: "text",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    switch (getControlItem.componentType) {
      case types.INPUT:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      case types.SELECT:
        element = (
          <Select
            value={value}
            onValueChange={(value) =>
              setFormData({ ...formData, [getControlItem.name]: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );

        break;

      case types.TEXTAREA:
        element = (
          <Textarea
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3 text-left">
        {formControls.map((controlItem) => (
          <div key={controlItem.name} className="grid w-full gap-1.5">
            <label className="mb-1 font-medium">{controlItem.label}</label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-8 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}
