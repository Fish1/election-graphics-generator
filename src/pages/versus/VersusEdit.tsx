import { Component } from "solid-js";

interface VersusEditProps {
  onWidthChange: (event: Event) => void;
  onHeightChange: (event: Event) => void;

  onHeaderChange: (event: Event) => void;
  onBackgroundFileChange: (event: Event) => void;

  onBox1FileChange: (event: Event) => void;
  onBox1ColorChange: (event: Event) => void;
  onBox2FileChange: (event: Event) => void;
  onBox2ColorChange: (event: Event) => void;
}

const VersusEdit: Component<VersusEditProps> = ( props ) => {
  return (
    <div class="flex flex-col border-2 p-2">
      <div>
        <input type="file" onChange={ props.onBox1FileChange }/>
        <input type="file" onChange={ props.onBox2FileChange }/>
        <input type="file" onChange={ props.onBackgroundFileChange }/>
      </div>
      <div>
        <input type="color" onInput={ props.onBox1ColorChange }/>
        <input type="color" onInput={ props.onBox2ColorChange }/>
      </div>
      <div>
        <label>Header: </label>
        <input type="text" onChange={ props.onHeaderChange }/>
      </div>
      <div>
        <label>Width: </label>
        <input type="number" onChange={ props.onWidthChange }/>
      </div>
      <div>
        <label>Height: </label>
        <input type="number" onChange={ props.onHeightChange }/>
      </div>
    </div>
  );
}

export default VersusEdit;