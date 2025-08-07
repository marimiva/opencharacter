import { Check, Cpu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getModelArray } from "@/lib/llm_models";
import { Separator } from "./ui/separator";

interface ModelSelectorProps {
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
}

export function ModelSelector({ selectedModel, onModelSelect }: ModelSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="bg-neutral-600 rounded-full p-1 transition-opacity opacity-70 hover:opacity-100 focus:opacity-100 hover:cursor-pointer"
        >
          <Cpu className="w-3 h-3 text-gray-300" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-neutral-800 rounded-lg shadow-lg">
        <div className="max-h-[50vh] overflow-y-auto p-2">
          {getModelArray().map((model) => (
            <DropdownMenuItem
              key={model.id}
              onClick={() => onModelSelect(model.id)}
              className={`flex items-center justify-between rounded-md p-2 text-xs hover:bg-neutral-700 transition-colors`}
            >
              <span>{model.name}</span>
              {selectedModel === model.id && (
                <Check className="w-4 h-4 text-green-500" />
              )}
            </DropdownMenuItem>
          ))}
        </div>

        <Separator />

        <div className="border-t border-neutral-700">
          <p className="text-xs text-gray-300 ml-4 mt-4 mb-2 font-bold">
            Selected: {selectedModel}
          </p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
