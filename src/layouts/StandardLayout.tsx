import { children, ParentComponent } from "solid-js";

const StandardLayout: ParentComponent = (props) =>{

  const c = children(() => props.children);

  return (
    <div class="m-4">
      { c }
    </div>
  )
}

export default StandardLayout;