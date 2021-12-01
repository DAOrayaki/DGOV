import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import daorayaki from 'src/images/daorayaki.png'

export default function Home() {
    const markdown = `
## DGOV2.0 内容治理

通过内容治理，社区贡献者可以自发策划研究主题并申请研究资助。内容治理共分为四个阶段：预提案、审核、投票、验收。

### 预提案

在提案正式被提出前，提案人员需要按照社区模板撰写提案内容，明确研究主题/问题、背景、意义、需求、产出、任务时间及申请资助金额。并发起一个线下投票（线下投票工具待定），投票中必须存含有“不资助”（反对票）的选项。如果有至少1人投票，并且投赞成票人数多于投反对票人数，则进入下一个阶段。

### 审核

 社区编辑对其进行格式审核和内容的初步审核，对具有明显攻击意图、敏感话题等内容的提案进行过滤，如果审核通过，赋予正式的 DAOrayaki Content Proposal 编号(DCP-N)，进入投票阶段。如果提案者对审核结果不满意，可以向委员会发起申诉。

### 投票

社区编辑协助提案者在预测市场(预测市场初步选择为Omen)中，开设问题为“如果DCP-N通过，那么提案人员可以在预定时间内完成预定指标” 的预测市场，并提供流动性。投票时间为7天，预测市场开设总时长为(7 + 任务时长 -1)天。并在第7天时，根据预测市场中Yes Token和No Token的价格来决提案是否通过。此时，分为两种情况：
1) 第7天时，No Token的价格高于Yes Token, 提案不通过，并且预测市场解析为No。
2) 第7天时，Yes Token的价格高于No Token，提案通过，此时预测市场依然开放，预测结果会在任务验收后进行解析。

### 验收

提案者需要在预定时间结束前通过共享文档方式，提交研究成果交给评审组进行投票，如果逾期未提供相应的文档，则任务失败，预测市场解析为No。

评审组采用基于Moloch协议的相对多数投票机制对文章进行投票，如果投票通过，则任务成功，此时第三步中设立的预测市场解析为Yes，否则的话，预测市场解析为No。
 
    `

    return (
        <div>
        <img src={daorayaki} alt="daorayaki dgov2.0" width="80%"></img>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}></ReactMarkdown>
        </div>
        )
}