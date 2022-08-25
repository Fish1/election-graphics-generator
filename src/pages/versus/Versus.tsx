import { Component, createEffect, createSignal } from 'solid-js';
import StandardLayout from '../../layouts/StandardLayout';
import VersusBox from './VersusBox';
import VersusEdit from './VersusEdit';

const Versus: Component = () => {

  const [ width, setWidth ] = createSignal(800);
  const [ height, setHeight ] = createSignal(600);

  const [ backgroundImage, setBackgroundImage ] = createSignal<undefined | string>();

  const [ header, setHeader ] = createSignal("2022 Vermont Senate Prediction");

  const [ box1img, setBox1img ] = createSignal<undefined | string>();
  const [ box1Main, setBox1Main ] = createSignal("Gerald Malloy (R)");
  const [ box1Sub, setBox1Sub ] = createSignal("U.S. Army Veteran");
  const [ box1Color, setBox1Color ] = createSignal("#00bcd4");

  const [ box2img, setBox2img ] = createSignal<undefined | string>();
  const [ box2Main, setBox2Main ] = createSignal("Peter Welch (D)");
  const [ box2Sub, setBox2Sub ] = createSignal("U.S. Representative (VT-AL) Since 2007");
  const [ box2Color, setBox2Color ] = createSignal("#00bcd4");

  createEffect(() => {
    console.log(backgroundImage());
  });

  function handleHeaderChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setHeader(target.value);
  }

  function handleWidthChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setWidth(parseInt(target.value));
  }

  function handleHeightChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setHeight(parseInt(target.value));
  }

  function handleBox1File(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const url = URL.createObjectURL(target.files[0]);
      setBox1img(url);
    }
  }

  function handleBox1ColorChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setBox1Color(target.value);
  }

  function handleBox2File(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const url = URL.createObjectURL(target.files[0]);
      console.log(url);
      setBox2img(url);
    }
  }

  function handleBox2ColorChange(event: Event) {
    const target = event.target as HTMLInputElement;
    setBox2Color(target.value);
  }

  function handleBackgroundFile(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const reader = new FileReader();
      const type = target.files[0].type;
      reader.readAsBinaryString(target.files[0]);
      reader.onload = (event) => {
        const data = btoa((event.target?.result ?? '') as string);
        const base64 = `data:${type};base64,${data}`;
        console.log(base64);
        setBackgroundImage(base64);
      }
    }
  }

  return (
    <StandardLayout>
      <VersusEdit
        onWidthChange={ handleWidthChange }
        onHeightChange={ handleHeightChange }
        onHeaderChange={ handleHeaderChange }
        onBackgroundFileChange={ handleBackgroundFile }
        onBox1FileChange={ handleBox1File }
        onBox1ColorChange={ handleBox1ColorChange }
        onBox2FileChange={ handleBox2File }
        onBox2ColorChange={ handleBox2ColorChange }
      />
      <VersusBox
        width={ width() }
        height={ height() }
        header={ header() }
        backgroundImage={ backgroundImage() }
        box1img={ box1img() }
        box1Main={ box1Main() }
        box1Sub={ box1Sub() }
        box1Color={ box1Color() }
        box2img={ box2img() }
        box2Main={ box2Main() }
        box2Sub={ box2Sub() }
        box2Color={ box2Color() }
      />
    </StandardLayout>
  );
}

export default Versus;