"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Head from "next/head";


export default function FinancesHelthCekup() {
  

  const [step, setStep] = useState(1);
  const [score, setScore] = useState(null);

  const [formData, setFormData] = useState({
    age: 30,
    income: 500000,
    savings: 100000,
    investments: 50000,
    debt: 0,
    dependents: 0,
    hasInsurance: false,
    hasEmergencyFund: false,
  });

  const calculateScore = () => {
    let totalScore = 0;
    const savingsRatio = (formData.savings / formData.income) * 100;
    totalScore += savingsRatio >= 20 ? 25 : savingsRatio >= 10 ? 15 : 5;

    const investmentRatio = (formData.investments / formData.income) * 100;
    totalScore += investmentRatio >= 15 ? 25 : investmentRatio >= 10 ? 15 : 5;

    const debtRatio = (formData.debt / formData.income) * 100;
    totalScore += debtRatio === 0 ? 20 : debtRatio <= 30 ? 15 : debtRatio <= 50 ? 10 : 0;

    if (formData.hasInsurance) totalScore += 15;
    if (formData.hasEmergencyFund) totalScore += 15;

    return Math.min(totalScore, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScore(calculateScore());
    setStep(3);
  };

  const getScoreColor = (score) =>
    score >= 80 ? "text-green-600" : score >= 60 ? "text-yellow-600" : "text-red-600";

  const getScoreMessage = (score) => {
    if (score >= 80) return "Excellent! Your financial health is strong.";
    if (score >= 60) return "Good! There's room for improvement.";
    return "Needs Attention! Let's work on improving your finances.";
  };

  const getRecommendations = (score) => {
    const recs = [];
    const savingsRatio = (formData.savings / formData.income) * 100;
    const investmentRatio = (formData.investments / formData.income) * 100;

    if (savingsRatio < 20) recs.push("Increase your savings rate to at least 20% of income");
    if (investmentRatio < 15)
      recs.push("Start investing at least 15% of your income in mutual funds or equity");
    if (formData.debt > 0) recs.push("Focus on reducing your debt to improve financial stability");
    if (!formData.hasInsurance)
      recs.push("Get adequate life and health insurance coverage immediately");
    if (!formData.hasEmergencyFund)
      recs.push("Build an emergency fund covering 6-12 months of expenses");

    if (recs.length === 0) {
      recs.push("Continue maintaining your excellent financial habits!");
      recs.push("Consider diversifying your investment portfolio further");
    }
    return recs;
  };

  return (
    <div  className="mt-3.5 w-full h-auto flex items-center justify-center" >
      <section>
        <div className="lg:w-[1000px] w-full max-h-screen dark:border-white/[0.2] border-black/[0.1] " >
          {/* Step 1 */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-xl p-8"
            >
              <div className="text-center mb-8">
               
                {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
           Your Financial<span className="text-[#6F39C5]"> Checkup.</span>
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
             Answer a few simple questions to get your personalized financial health score and recommendations.
          </p>
        </div>
        
              </div>

              <div className="space-y-6 w-full">
                {[
                  "Quick & Easy – Takes only 2-3 minutes",
                  "AI-Powered Analysis – Advanced algorithms analyze your situation",
                  "Personalized Recommendations – Get tailored advice instantly",
                ].map((item, i) => (
                  <div key={i} className="flex border-2 items-start space-x-3 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 " />
                    <p >{item}</p>
                  </div>
                ))}
              </div>

              <Button
                className="w-full mt-8 navy-gradient  hover:opacity-90 text-lg py-6"
                onClick={() => setStep(2)}
              >
                Start Your Checkup <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-2 rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-8 text-center">
                Tell Us About Your Finances
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                {[
                  ["Your Age", "age", 18, 70, 1, "years"],
                  ["Annual Income", "income", 100000, 10000000, 50000, "₹"],
                  ["Total Savings", "savings", 0, 5000000, 10000, "₹"],
                  ["Current Investments", "investments", 0, 5000000, 10000, "₹"],
                  ["Total Debt", "debt", 0, 5000000, 10000, "₹"],
                  ["Dependents", "dependents", 0, 10, 1, ""],
                ].map(([label, key, min, max, step, unit]) => (
                  <div key={key}>
                    <Label className="text-lg font-semibold mb-4 block">
                      {label}: {unit === "₹"
                        ? `₹${formData[key].toLocaleString("en-IN")}`
                        : `${formData[key]} ${unit}`}
                    </Label>
                    <Slider
                      value={[formData[key]]}
                      onValueChange={(v) => setFormData({ ...formData, [key]: v[0] })}
                      min={min}
                      max={max}
                      step={step}
                      className="w-full"
                    />
                  </div>
                ))}

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasInsurance}
                      onChange={(e) =>
                        setFormData({ ...formData, hasInsurance: e.target.checked })
                      }
                      className="w-5 h-5 "
                    />
                    <p>I have adequate life and health insurance</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.hasEmergencyFund}
                      onChange={(e) =>
                        setFormData({ ...formData, hasEmergencyFund: e.target.checked })
                      }
                      className="w-5 h-5"
                    />
                    <p>I have an emergency fund (6–12 months)</p>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button type="submit" className="flex-1 navy-gradient  hover:opacity-90">
                    Calculate My Score
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Step 3 */}
          {step === 3 && score !== null && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className=" border-2 rounded-xl shadow-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Your Financial Health Score
                </h2>
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle cx="96" cy="96" r="88" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="#f59e0b"
                      strokeWidth="12"
                      fill="none"
                      strokeDasharray={`${score * 5.53} 553`}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className={`text-5xl font-bold ${getScoreColor(score)}`}>{score}</div>
                      <div className=" text-sm">out of 100</div>
                    </div>
                  </div>
                </div>
                <p className={`text-2xl font-semibold mb-4 ${getScoreColor(score)}`}>
                  {getScoreMessage(score)}
                </p>
              </div>

              <div className="border-2 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold  mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Personalized Recommendations
                </h3>
                <div className="space-y-4">
                  {getRecommendations(score).map((rec, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 rounded-lg">
                      <AlertCircle className="w-6 h-6 " />
                      <p >{rec}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className=" border-2 rounded-xl shadow-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Improve Your Financial Health?</h3>
                <p className=" mb-6">
                  Book a free consultation with our expert financial advisors to create a
                  personalized plan.
                </p>
                <Button
                  size="lg"
                  className="gold-gradient hover:opacity-90"
                  onClick={() =>
                    toast({
                      title:
                        "🚧 This feature isn't implemented yet — request it in your next prompt!",
                      duration: 3000,
                    })
                  }
                >
                  Book Free Consultation
                </Button>
              </div>

              <div className="text-center ">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep(1);
                    setScore(null);
                  }}
                >
                  Start New Checkup
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
