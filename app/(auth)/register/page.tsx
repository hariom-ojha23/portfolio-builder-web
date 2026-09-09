import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import RegisterForm from '@/features/auth/components/RegisterForm'
import { cn } from 'cn'
import Link from 'next/link'

export default function RegisterPage() {
  const linkClass = 'hover:underline hover:text-blue-400 cursor-pointer'

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create new account</CardTitle>
        <CardDescription>Enter your name, email & password to create your account</CardDescription>
      </CardHeader>

      <CardContent>
        <RegisterForm />
      </CardContent>

      <CardFooter className="flex-col gap-4">
        <Button type="submit" form="register-form" className="w-full">
          Register
        </Button>

        <p>
          Already have an account?
          <Link href="/login" className={cn(linkClass, 'ml-1')}>
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
