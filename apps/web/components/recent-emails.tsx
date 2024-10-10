import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentEmails = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    subject: "New project proposal",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    subject: "Meeting notes",
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    subject: "Updated design files",
  },
  {
    name: "William Kim",
    email: "william.kim@email.com",
    subject: "Quarterly report",
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    subject: "Team lunch next week",
  },
]

export function RecentEmails() {
  return (
    <div className="space-y-8">
      {recentEmails.map((email, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={`https://avatar.vercel.sh/${email.name.replace(" ", "").toLowerCase()}`} alt={email.name} />
            <AvatarFallback>{email.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{email.name}</p>
            <p className="text-sm text-muted-foreground">{email.subject}</p>
          </div>
          <div className="ml-auto font-medium">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ))}
    </div>
  )
}