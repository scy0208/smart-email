import { Icons } from "@/components/icons"

const featureConfigs = [

    // {
    //     "features": [
    //         {
    //             "name": "Plain language Driven Setup",
    //             "description": "Just input what you want to achieve, Our AI will help you define label and rules.",
    //             "icon": Icons.chevronRight
    //         },
    //         {
    //             "name": "Adaptive Rules Engine",
    //             "description": "Adapts and evolves based on your email patterns, ensuring that the labeling and rules are always in sync with your communication needs.",
    //             "icon": Icons.chevronRight
    //         }
    //     ],
    //     "title": "Automate Labels and Rules Management",
    //     "subTitle": "Mange labels and rules using plain language",
    //     "description": "Effortlessly manage your inbox with AI-powered labels and rules. Set up and adjust email categories using simple language, no complex configurations needed.",
    //     "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_en.jpg",
    //     "imageAlt": "Labels and Rules Management",
    //     "imageFirst": true
    // },  
    {
        "features": [
            {
                "name": "Email Intention and topic classification by AI",
                "description": "Accurately determine the topic and intention of each email by deeply analyzing the content and context",
                "icon": Icons.chevronRight
            },
            {
                "name": "Inbox Automation",
                "description": "Automatically label every new email using different color, so you can quickly identify and prioritize emails that need your attention",
                "icon": Icons.chevronRight
            }
        ],
        "title": "Automate Intention detection",
        "subTitle": "Automatically label every email",
        "description": "Smartly sorts your emails by intention and rules, eliminating manual categorization for a streamlined and organized inbox.",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-auto-label_en_1.png",
        "imageAlt": "Gmail Overview",
        "imageFirst": false
    },
    {
        "features": [
            {
                "name": "Use AI under control",
                "description": "Balances AI automation with your personal decision, letting you decide the final response to ensure the professional.",
                "icon": Icons.chevronRight
            },
            {
                "name": "Evolution but not revolution",
                "description": "Optimize but not replace your existing workflow",
                "icon": Icons.chevronRight
            }
        ],
        "title": "Automate Response Suggestion",
        "subTitle": "Suggest best response template for you",
        "description": "Not rely on AI to auto response, only suggest best response template for you to choose, ensure you are in control of the professional and humanized response.",
        "imageUrl": "https://d2aaddunp29031.cloudfront.net/email-template_1.png",
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
