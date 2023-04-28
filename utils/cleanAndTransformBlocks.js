import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocks) => {

    const assignId = (b) => {
        b.forEach(block => {
            block.id = uuid();
            block.attributes = JSON.parse(block.attributesJSON);
            if(block.innerBlocks?.length){
                assignId(block.innerBlocks);
            }
        });
    }

    assignId(blocks);

    return blocks;
}