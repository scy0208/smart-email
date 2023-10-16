import { Icons } from "@/components/icons"
import ReactMarkdown from 'react-markdown';

const featureConfigs = [
    // {
    //     "features": [
    //         {
    //             "name": "个性化的业务流标签规则",
    //             "description": "我们团队将根据您现有客服流程、回复模版为您定制邮件标签、意图分类规则",
    //             "icon": Icons.chevronRight
    //         },
    //         {
    //             "name": "0邮箱配置基础即可完成标签规则制定",
    //             "description": "自助服务，通过AI自然语言制定标签规则",
    //             "icon": Icons.chevronRight
    //         }
    //     ],
    //     "title": "最懂您业务流程的邮件标签",
    //     "subTitle": "基于业务流定制标签规则",
    //     "description": "标签深度定制化，根据您的客服流程深度定制标签、规则，最大化确保每一封邮件的意图被准确识别且能根据业务流快速响应",
    //     "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_cn.jpg",
    //     "imageAlt": "Labels and Rules Management",
    //     "imageFirst": false
    // },  
    {
        "features": [
            {
                "name": "自动标签",
                "description": "根据邮件内容，进行意图识别和标签化，**邮件意图简洁明了**",
                "icon": Icons.chevronRight
            },
            {
                "name": "彩色标识",
                "description": "不同邮件意图对应不同颜色，**收件箱状态一目了然**\n\n- **红色**：客户请求\n- **蓝色**：网红对接\n- **灰色**：服务商和广告\n- **绿色**：问题解决",
                "icon": Icons.chevronRight
            }
        ],
        "title": "使用AI自动化识别每一封邮件意图并标签",
        "subTitle": "意图分析",
        "description": "邮件意图准确标签化，不同颜色标识让客服人员一目了然，永远不会错过重要的客户请求及合作方的更新",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_cn_2.png",
        "imageAlt": "Gmail Overview",
        "imageFirst": false
    },
    {
        "features": [
            {
                "name": "精确回复模版推送",
                "description": "根据邮件意图标签，自动从企业现有邮件模版中筛选出最适合的回复模版",
                "icon": Icons.chevronRight
            },
            {
                "name": "客服快速上手",
                "description": "提高客服人员的回复准确率和效率，让每一封邮件都得到专业、准确的回应",
                "icon": Icons.chevronRight
            }
        ],
        "title": "根据邮件意图标签，自动推荐模版",
        "subTitle": "模版推荐",
        "description": "减少阅读理解与模版选择时间，提高客服工作效率，利用AI分析推荐，但不依赖AI自动回复，确保回复的人性化与专业性",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-template.png",
        "imageAlt": "Gmail Overview",
        "imageFirst": true
    }
    
    
];

export function Features() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" id="features">
            {featureConfigs.map((config, index) => (
                <div key={index} className="mx-auto max-w-7xl px-6 lg:px-8 mt-20">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className={`lg:${index === 0 ? "ml-auto pl-4 pt-4" : "pr-8 pt-4"}`}>
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">{config.title}</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{config.subTitle}</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">{config.description}</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {config.features.map((feature) => (
                                       <div key={feature.name} className="relative pl-9">
                                       <dt className="inline font-semibold text-gray-900">
                                           <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                           {feature.name}
                                       </dt>{' '}
                                       <dd className="inline">
                                           <ReactMarkdown>
                                               {feature.description}
                                           </ReactMarkdown>
                                       </dd>
                                   </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className={`flex ${config.imageFirst ? "lg:order-first items-start justify-end" : "items-end justify-start"}`}>
                            <img
                                src={config.imageUrl}
                                alt={config.imageAlt}
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
