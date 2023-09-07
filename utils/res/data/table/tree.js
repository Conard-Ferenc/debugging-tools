let treeData = [
  {
    name: 'nodeA',
    value: 10,
    children: [
      {
        name: 'nodeAa',
        value: 4
      },
      {
        name: 'nodeAb',
        value: 6
      }
    ]
  },
  {
    name: 'nodeB',
    value: 20,
    children: [
      {
        name: 'nodeBa',
        value: 20,
        children: [
          {
            name: 'nodeBa1',
            value: 20
          }
        ]
      }
    ]
  }
]

module.exports =  {
  treeData
}