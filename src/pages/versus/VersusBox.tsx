import { Component } from "solid-js";

interface VersusBoxProps {
  width: number;
  height: number;

  header: string;
  backgroundImage: string | undefined;

  box1img: string | undefined;
  box1Main: string;
  box1Sub: string;
  box1Color: string;

  box2img: string | undefined;
  box2Main: string;
  box2Sub: string;
  box2Color: string;
}

const VersusBox: Component<VersusBoxProps> = ( props ) => {
  return (
    <div
      class="flex flex-col p-2 bg-black text-white"
      style={{
        width: `${ props.width }px`,
        height: `${ props.height }px`,
        background: `url("${ props.backgroundImage }")`
      }}
    >
      <header class="flex border-b-2">
        <div class="grow text-center text-4xl pb-2">
          { props.header }
        </div>
      </header>
      <section class="flex-1 grid grid-cols-2 grid-rows-[auto_min-content] gap-x-5 p-3">
        <div
          class="flex overflow-hidden items-center justify-center border-2"
        >
          <img class="w-full h-full object-cover" src={ props.box1img }/>
        </div>

        <div
          class="flex overflow-hidden items-center justify-center border-2"
        >
          <img class="w-full h-full object-cover" src={ props.box2img }/>
        </div>

        <footer
          class="p-1 border-l-2 border-b-2 border-r-2"
          style={{
            background: props.box1Color
          }}
        >
          <div>{ props.box1Main }</div>
          <div>{ props.box1Sub }</div>
        </footer>

        <footer
          class="p-1 border-l-2 border-b-2 border-r-2"
          style={{
            background: props.box2Color,
          }}
        >
          <div>{ props.box2Main }</div>
          <div>{ props.box2Sub }</div>
        </footer>
      </section>
      <footer>
        <div>
          YAPms Election Graphics Generator
        </div>
        <div>
          This is pretty cool
        </div>
      </footer>
    </div>
  );
}

export default VersusBox;