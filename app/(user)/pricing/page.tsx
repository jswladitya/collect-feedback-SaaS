"use client"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const plans = [
    {
      name: "Life Time Access",
      icon: "⚡",
      price: "$7",
      features: [
        "Unlimited Projects",
        "Unlimited Feedbacks",
        "Priority Support",
        "Access to new features",
      ],
      buttonText: "Get Access",
      buttonVariant: "default" as const,
      popular: true,  
    },
  ]

  return (
  <div className="min-h-screen bg-white py-6">
    <div className="max-w-2xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4 bg-white border border-gray-200">
          📊 Pricing Plans
        </Badge>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-3">
        Simple, one-time pricing for lifetime access. No subscriptions, no recurring fees.
        </h1>
      </div>

      {/* Pricing Cards */}
      <div className="gap-6 mx-auto md:h-[60vh] md:w-[20vw]">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.popular ? "border-2 border-gray-900 shadow-lg scale-100 md:scale-105" : "border border-gray-200"
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs">
                ⭐ Popular
              </Badge>
            )}

            <CardHeader className="text-center pb-3 space-y-2">
              <div className="text-xl mb-1">{plan.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>

              <div>
                {plan.name === "Life Time Access" ? (
                  <>
                    <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                  </>
                ) : (
                  <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                className={`w-full text-sm py-2 ${plan.popular ? "bg-gray-900 hover:bg-gray-800 text-white" : ""}`}
              >
                {plan.buttonText}
                <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
)
}
