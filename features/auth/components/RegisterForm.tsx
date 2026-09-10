'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { RegisterInput, registerSchema } from '../schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function RegisterForm() {
  const router = useRouter()
  const { register: registerUser } = useAuth()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' }
  })

  const onSubmit = async (data: RegisterInput) => {
    try {
      setServerError(null)
      await registerUser(data)

      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to register. Please try again.'
      setServerError(message)
    }
  }

  return (
    <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-5">
        {serverError && <p className="text-xs text-destructive">{serverError}</p>}

        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="name"
            required
            placeholder="Enter your name"
            autoComplete="name"
            disabled={isSubmitting}
            {...register('name')}
          />

          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>

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
