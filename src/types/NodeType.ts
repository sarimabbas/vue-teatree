interface NodeType {
  // show: toggling this will show/hide the node and its children
  show: boolean;
  // showChildren: toggling this will toggle its children
  showChildren: boolean;
  // selected: toggling this will apply the "selected" CSS style
  selected: boolean;
  // children: the children must also conform to the node specification
  children: Array<NodeType>;
  // name: the name of the node
  name: string;
  // icon: base64 encoded icon (optional)
  icon?: string;
  // data: payload by the user of the library (optional)
  data?: object;
}

export default NodeType;
