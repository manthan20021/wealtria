import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function InputGroupDemo() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center dark:bg-none bg-gradient-to-br from-[#e6d5ff] to-[#aa69f4] px-4 py-16">
      <Card className="w-full max-w-[1200px] rounded-2xl border border-border/40 shadow-xl bg-white/90 dark:bg-white/10 backdrop-blur-md transition-colors duration-300">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold text-gray-900 dark:text-white">
            Contact Us
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            We'd love to hear from you! Fill out the form and we'll get back to you soon.
          </p>
        </CardHeader>

        <CardContent>
          <form className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-200 text-sm">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-200 text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-200 text-sm">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  rows={8}
                  className="bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800 transition-all px-8 py-6 text-lg rounded-xl shadow-lg"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
