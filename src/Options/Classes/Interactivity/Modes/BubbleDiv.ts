import type { RecursivePartial } from "../../../../Types/RecursivePartial";
import type { SingleOrMultiple } from "../../../../Types/SingleOrMultiple";
import type { IBubbleDiv } from "../../../Interfaces/Interactivity/Modes/IBubbleDiv";
import { BubbleBase } from "./BubbleBase";

export class BubbleDiv extends BubbleBase implements IBubbleDiv {
    public ids: SingleOrMultiple<string>;

    constructor() {
        super();

        this.ids = [];
    }

    public load(data?: RecursivePartial<IBubbleDiv>): void {
        super.load(data);

        if (!(data !== undefined && data.ids !== undefined)) {
            return;
        }

        this.ids = data.ids;
    }
}
