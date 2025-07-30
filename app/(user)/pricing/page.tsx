"use client"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingPage() {
  const plans = [
    {
      name: "Hobby",
      icon: "⭐",
      description: "The perfect starting place for your web app or personal project.",
      price: "Free forever",
      features: [
        "50 API calls / month",
        "60 second checks",
        "Single-user account",
        "5 monitors",
        "Basic email support",
      ],
      buttonText: "Get started for free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      icon: "⚡",
      description: "Everything you need to build and scale your business.",
      price: "$9",
      priceSubtext: "one-time payment, lifetime access",
      features: [
        "Unlimited API calls",
        "30 second checks",
        "Multi-user account",
        "10 monitors",
        "Priority email support",
      ],
      buttonText: "Get Lifetime Access",
      buttonVariant: "default" as const,
      popular: true,
    },
  ]

  return (
  <div className="min-h-screen bg-white py-6">
    <div className="max-w-2xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge variant="secondary" className="mb-4 bg-white border border-gray-200">
          📊 Pricing Plans
        </Badge>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Pick the perfect plan for your needs
        </h1>

        <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
          Simple, one-time pricing for lifetime access. No subscriptions, no recurring fees.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 mx-auto">
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
              <p className="text-xs text-gray-600">{plan.description}</p>

              <div>
                {plan.name === "Pro" ? (
                  <>
                    <div className="text-2xl font-bold text-gray-900">{plan.price}</div>
                    <div className="text-xs text-gray-600">{plan.priceSubtext}</div>
                  </>
                ) : (
                  <div className="text-xl font-bold text-gray-900">{plan.price}</div>
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
