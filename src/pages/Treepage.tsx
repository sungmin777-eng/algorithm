import React, {useState, uesEffect} from 'react'
import styled from 'styled-components'
import {} from 'react-beautiful-dnd '

type TreeNode={
    id:string;
    title: string;
    level: number;
    category?: '효과'|'결과'|'산출물'

}
const Treepage:React.Fc = ()=>{
    const [tree,setTree]=usestate<TreeNode[]>([]);
    const [input,setInput]= usestate('');

    useEffect(()=>{
        const saved = localStorage.getitem('tree');
    if (saved) setTree(JSON.perse(saved));
    },tree[])
}