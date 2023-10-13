import { Icons } from "@/components/icons"

const featureConfigs = [

    {
        "features": [
            {
                "name": "个性化的业务流标签规则",
                "description": "我们团队将根据您现有客服流程、回复模版为您定制邮件标签、意图分类规则",
                "icon": Icons.chevronRight
            },
            {
                "name": "0邮箱配置基础即可完成标签规则制定",
                "description": "自助服务，通过AI自然语言制定标签规则",
                "icon": Icons.chevronRight
            }
        ],
        "title": "最懂您业务流程的邮件标签",
        "subTitle": "基于业务流定制标签规则",
        "description": "标签深度定制化，根据您的客服流程深度定制标签、规则，最大化确保每一封邮件的意图被准确识别且能根据业务流快速响应",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_cn.jpg",
        "imageAlt": "Labels and Rules Management",
        "imageFirst": false
    },  
    {
        "features": [
            {
                "name": "一目了然收件箱",
                "description": "帮你打开邮箱的瞬间一目了然地了解客服收件箱中活跃的客户请求话题",
                "icon": Icons.chevronRight
            },
            {
                "name": "邮件意图简明扼要",
                "description": "彩色简介的标签让您不用再逐字翻译精读每封邮件，自动标签将为您精准解读用户意图并归入您的业务流，0英语经验亦可快速上手",
                "icon": Icons.chevronRight
            }
        ],
        "title": "AI自动化识别每一封邮件意图并标签",
        "subTitle": "自动化意图识别的邮件标签",
        "description": "让人工智能预先帮你完成邮件意图归类，显著降低47%客服时间",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_cn.jpg",
        "imageAlt": "Gmail Overview",
        "imageFirst": true
    },
    {
        "features": [
            {
                "name": "精确回复模版推送",
                "description": "使用人工智能但不依赖人工智能自动回复，模版推送依然能确保每一个回复的可控、专业",
                "icon": Icons.chevronRight
            },
            {
                "name": "安装即可使用",
                "description": "0学习门槛，帮助新聘客服快速投入工作",
                "icon": Icons.chevronRight
            }
        ],
        "title": "邮件意图标签+模版推送的快速响应",
        "subTitle": "新客服快速上手，应对客服高峰",
        "description": "",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_cn.jpg",
        "imageAlt": "Gmail Overview",
        "imageFirst": false
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
                                            <dd className="inline">{feature.description}</dd>
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
