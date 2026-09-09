'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LoginInput, loginSchema } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { login } from '../api'

export default function LoginForm() {
  const router = useRouter()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  })

  const onSubmit = async (data: LoginInput) => {
    try {
      setServerError(null)
      await login(data)

      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to login. Please try again.'
      setServerError(message)
    }
  }

  return (
    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        {serverError && <p className="text-xs text-destructive">{serverError}</p>}

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            disabled={isSubmitting}
            {...register('email')}
          />

          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <InputGroup>
            <InputGroupInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              required
              minLength={6}
              placeholder="••••••••"
              disabled={isSubmitting}
              {...register('password')}
            />

            <InputGroupAddon
              className="cursor-pointer"
              align="inline-end"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </InputGroupAddon>
          </InputGroup>

          {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
        </div>
      </div>
    </form>
  )
}
