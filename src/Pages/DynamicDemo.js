import React from "react";
import "../CSS/DynamicDemo.css";

const DynamicForm = props => {
  return (
    <div className={"dynamic-form"}>
      <input
        onChange={e => {
          const inputData = {
            formSerial: props.formSerial,
            value: e.target.value
          };
          props.onChangeComponentData(inputData);
        }}
        placeholder={`Enter Text ${props.formSerial}`}
        type="text"
      />
      <button
        onClick={() => props.removeFormButtonClick(props.formSerial)}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default class DynamicDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dynamicFormSerial: [],
        dynamicComponentData: [],
        saveComponentData: []
        //  posts: []
      };
    }
    
    onAddFormButtonClick = () => {
      const { dynamicFormSerial } = this.state;
      let tempDynamicSerial = dynamicFormSerial;
      tempDynamicSerial = [...tempDynamicSerial, tempDynamicSerial.length + 1];
      this.setState({ dynamicFormSerial: tempDynamicSerial });
    };
  
    removeFormButtonClick = removeFormSerial => {
      const { dynamicFormSerial, dynamicComponentData } = this.state;
      let tempDynamicSerial = dynamicFormSerial;
      let tempDynamicComponentData = dynamicComponentData;
  
      let removeIndex = null;
      dynamicComponentData.map((item, index) => {
        if (item.formSerial === removeFormSerial) {
          removeIndex = index;
        }
        return null;
      });
  
      tempDynamicComponentData.splice(
        tempDynamicComponentData.indexOf(removeIndex),
        1
      );
      tempDynamicSerial.splice(tempDynamicSerial.indexOf(removeFormSerial), 1);
      this.setState({
        dynamicFormSerial: tempDynamicSerial,
        dynamicComponentData: tempDynamicComponentData
      });
    };
  
    onChangeComponentData = data => {
      const { dynamicComponentData } = this.state;
      console.log(dynamicComponentData);
      let tempDynamicComponentData = dynamicComponentData;
      let removeItem = null;
      tempDynamicComponentData.map((item, index) => {
        if (item.formSerial === data.formSerial) {
          removeItem = item;
        }
        return null;
      });
      removeItem !== null &&
        tempDynamicComponentData.splice(
          tempDynamicComponentData.indexOf(removeItem),
          1
        );
      tempDynamicComponentData.push(data);
      this.setState({ dynamicComponentData: tempDynamicComponentData });
    };
  
    onSaveComponentData = data => {
      const { dynamicComponentData } = this.state;
      this.setState({
        saveComponentData: dynamicComponentData,
        dynamicComponentData: [],
        dynamicFormSerial: []
      });
    };
  
    render() {
      return (
        <div>
          <div className={"add-form-button"}>
            <button onClick={this.onAddFormButtonClick} type="submit">
              Add More
            </button>
            <button
              className={"add-form-button"}
              type="button"
              onClick={() => this.onSaveComponentData()}>
              Save
            </button>
          </div>
          <div>
            {this.state.dynamicFormSerial &&
              this.state.dynamicFormSerial.map((item, index) => {
                return (
                  <DynamicForm
                    key={item}
                    {...this.props}
                    formSerial={item}
                    removeFormButtonClick={this.removeFormButtonClick}
                    onChangeComponentData={this.onChangeComponentData}
                  />
                );
              })}
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {this.state.saveComponentData &&
                  this.state.saveComponentData.map((item, index) => {
                    return (
                      <tr>
                        <td>{item.formSerial}</td>
                        <td>{item.value}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }