// 获取data值
export const getNodeData = dataName => event => event.currentTarget.dataset[dataName];
// 获取input Value值
export const getInputValue = event => event.detail.value;
// 获取 input 的信息 返回 {dataName: value}
export const getNodeValue = (dataName) => event => ({
  [event.currentTarget.dataset[dataName]]: getInputValue(event)
});
