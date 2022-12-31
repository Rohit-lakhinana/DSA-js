//TREES
/* A tree is a data structure where a node can have
 zero or more children. */

 /* BINART - TREE " :-- A ROOT NODE CAN HAVE 0,1,2 childnodes*/
 /* F-B-T :-- A ROOT NODE CAN HAVE EITHER 0 or 2 Childrens */
 /* C-B-T :-- ALL THE LEVELS CAN BE COMPLETELY FILLED EXCEPT
    LAST LEVEL, IF WE WANT FILL THEM FILL THEM FROM LEFT SIDE */
/* P-B-T :- ALL THE LEAF NODES SHOULD BE AT SAME LEVEL */

// C-B-T TYPES :-
//in,pre,post orders

//creating a tree with nodes

class mm {
    constructor(data,left,right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const root = new mm(1,null,null)
const node2 = new mm(2,null,null)
const node3 = new mm(3,null,null)
const node4 = new mm(4,null,null)
const node5 = new mm(5,null,null)
const node6 = new mm(6,null,null)
const node7 = new mm(7,null,null)
const node8 = new mm(8,null,null)
const node9 = new mm(9,null,null)
const node10 = new mm(10,null,null)
const node11 = new mm(11,null,null)

root.left = node2;
root.right = node3;
node2.left = node4;   //                 1
node2.right = node5;   //          2            3
node3.left = node6;   //         4    5       6     7
node3.right = node7;  //      10  11        8   9
node6.left = node8;   //
node6.right = node9;
node4.left = node10;  //( in-order =  10,4,11,2,5,1,8,6,9,3,7)
node4.right = node11; //( pre-order = 1,2,4,10,11,5,3,6,8,9,7)
                      //( post-order = 10,11,4,5,2,8,9,6,7,3,1)
//console.log(root)

//pre-order
function preo(root){
    //base condition
    if(root === null) return;

    console.log(root.data)
    preo(root.left)
    preo(root.right)
}

preo(root)

//in-order
function io(root){
    if(root === null) return;

    io(root.left)
    console.log(root.data)
    io(root.right)
}

console.log("io")
io(root)

//post-order
function po(root){
    if(root===null) return

    po(root.left)
    po(root.right)
    console.log(root.data)
}

console.log("post - order")
po(root)

//1.) FIND TARGET AND MODIFY THE DATA

function md(root,target,newdata){
    if(root === null) return;
    if(root.data === target){
        root.data = newdata;
        return;
    }
    
    md(root.left,target,newdata);
    md(root.right,target,newdata);
}

console.log("MODIFY DATA")
md(root,3,15)
io(root) //we need to call in,pre,post orders to see the output

//2.) FIND THE LEAF NODES

function ln(root){
    if(root === null) return;
    if(root.left == null && root.right == null){
        console.log(root.data);
    }

    ln(root.left);
    ln(root.right)
}

console.log("PRINT ALL THE LEAF NODES")
ln(root) // 10,11,5,8,9,7

//3.) PRINT TOTAL NUMBER OF NODES IN A TREE

function pt(root,count){
    if(root === null) return count;
    count++;
    count = pt(root.left, count);
    count = pt(root.left, count)
    return count;
}


console.log("PRINT ALL THE NODES")
console.log(pt(root,0))

////Q.4) QUESTION
//CALCULATE / HEIGHT OR DEPTH OF  A TREE
//HEIGHT = NUMBER OF LEVELS / LONGEST LINK FROM THE LEFT SIDE OF ROOT-NODE

function calculateHeight(root){
    if(root === null) return 0;
    if(root.left === null && root.right === null) return 1;

    var lstCount = calculateHeight(root.left)
    var rstCount = calculateHeight(root.left)

    return Math.max(lstCount,rstCount) + 1;
}

let HEIGHT = calculateHeight(root)
console.log(HEIGHT) //4
