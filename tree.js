function treeData(source, id, parentId, children){   
    let cloneData = JSON.parse(JSON.stringify(source))
    return cloneData.filter(father=>{
        let branchArr = cloneData.filter(child => father[id] == child[parentId]);
        branchArr.length>0 ? father[children] = branchArr : ''
        return father[parentId] == 0        // 如果第一层不是parentId=0，请自行修改
    })
}
 
// 调用时，字段名以字符串的形式传参，如treeData(source, 'id', 'parentId', 'children')