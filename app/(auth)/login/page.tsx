import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import LoginForm from '../../../features/auth/components/LoginForm'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from 'cn'

export default function LoginPage() {
  const linkClass = 'hover:underline hover:text-blue-400 cursor-pointer'

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>

      <CardFooter className="flex-col gap-4">
        <Button type="submit" form="login-form" className="w-full">
          Login
        </Button>

        <Link href="/forgot-password" className={cn(linkClass)}>
          Forgot Password?
        </Link>

        <p>
          Do not have an account?
          <Link href="/register" className={cn(linkClass, 'ml-1')}>
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
