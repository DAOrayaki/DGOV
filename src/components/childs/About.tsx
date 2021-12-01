import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


export default function About() {
    const markdown = `
## DAOrayaki 简介 
   
   **一个民主治理和所有人都可以利用的公共媒体系统**

   **To empower people，we must decentralization information**

**DAOrayaki** 是一个去中心化的研究者组织和去中心化媒体，通过 DAO的形式去中心化地资助世界各地的研究者进行研究、翻译、分析等工作。**DAOrayaki** 由早期的 DAO 组织 DAOONE 核心成员发起，得到了Dora Factory基础设施的支持。自 2021 年 1 月以来，**DAOrayaki** 的贡献者网络已经深入覆盖了二次方资助、Futarchy、dGov、Moloch、算法治理、可回溯公共物品融资、奥斯特罗姆公共事务治理方法等数十个话题和以太坊生态研究成果。目前，我们已追踪研究53个DAO项目，发表 131 篇文章，普及了去中心化治理的知识和最新进展。

通过 DAO，研究组织和媒体可以打破地域的限制，以社区的方式资助和生产内容。**DAOrayaki**将会通过DAO的形式，构建一个满足人们需求，一个民主治理和所有人都可以利用的公共媒体系统，从而实现真正意义上的去中心化。


## 联系方式
官网：https://daorayaki.org     
    
Discord: 点击[链接](https://discord.gg/hR7v3H8K)加入discord社区讨论  
    
Twitter: @orayakida  
    
微信公众号：Dorafactory    
    
微信助手：DAOrayaki-media  
       
    `

    return (
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        )
}