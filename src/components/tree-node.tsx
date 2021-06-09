import React from "react";
import { TreeData } from "../typings";
import file from "../assets/file.png";
import folderClose from "../assets/folder.png";
import folderOpen from "../assets/folder-open.png";
import loadingSrc from "../assets/loading.png";
interface Props {
  data: TreeData;
  onCollapse: any;
  onCheck: any;
}
class TreeNode extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    let {
      data: { name, children, key, collapsed, checked, loading },
      onCheck,
    } = this.props;
    let caret = null;
    let icon = null;
    if (children) {
      if (children.length > 0) {
        caret = (
          <span
            className={`collapse ${collapsed ? "caret-right" : "caret-down"}`}
            onClick={() => this.props.onCollapse(key)}
          ></span>
        );
        icon = collapsed ? folderOpen : folderClose;
      } else {
        caret = null;
        icon = file;
      }
    } else {
      caret = loading ? (
        <img
          style={{ width: 14, top: "50%", marginTop: "-7px" }}
          className="collapse"
          src={loadingSrc}
        />
      ) : (
        <span
          className={`collapse caret-right`}
          onClick={() => this.props.onCollapse(key)}
        ></span>
      );
      icon = folderOpen;
    }
    return (
      <div className="tree-node">
        <div className="inner">
          {caret}
          <span className="content">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onCheck(key)}
            />
            <img style={{ width: 20 }} src={icon} alt="" />
            {name}
          </span>
        </div>
        {children && children.length > 0 && !collapsed && (
          <div className="children">
            {children.map((item) => (
              <TreeNode
                data={item}
                key={item.key}
                onCollapse={this.props.onCollapse}
                onCheck={onCheck}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TreeNode;
