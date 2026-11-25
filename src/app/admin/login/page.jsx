'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import Logo from '@/components/Logo/Logo';
import authService from '@/lib/services/auth';
import styles from './login.module.css';

const ADMIN_LOGIN_VISUAL_DESKTOP =
  'https://chairvala.b-cdn.net/basic_assets/Espresso%20Patio%20Set%20with%20Colorful%20Chairs%20(1).png';

const ADMIN_LOGIN_VISUAL_MOBILE =
  'https://chairvala.b-cdn.net/basic_assets/Colorful%20Rattan%20Patio%20Table%20Set%20(1).png';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      toast.error('Please enter username and password');
      return;
    }

    try {
      setLoading(true);
      await authService.adminLogin(username, password);
      toast.success('Admin login successful!');
      router.push('/admin/dashboard');
    } catch (err) {
      toast.error(err.message || 'Invalid admin credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.split}>
        <aside className={styles.visual} aria-hidden="true">
          <Image
            src={ADMIN_LOGIN_VISUAL_DESKTOP}
            alt=""
            fill
            priority
            sizes="(min-width: 900px) 40vw, 0"
            className={styles.visualImage}
          />
        </aside>
        <main className={styles.page} aria-labelledby="admin-login-heading">
        <header className={styles.header}>
          <Logo size="sm" className={styles.logoWrap} />
          <h1 id="admin-login-heading" className={styles.brand}>
            Admin Sign In
          </h1>
        </header>

        <form onSubmit={handleSubmit} className={styles.form} autoComplete="on" noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="admin-username">
              Username or Email
            </label>
            <input
              id="admin-username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className={styles.input}
              autoComplete="username"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="admin-password">
              Password
            </label>
            <div className={styles.passwordWrap}>
              <input
                id="admin-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={styles.input}
                autoComplete="new-password"
                data-lpignore="true"
                data-1p-ignore="true"
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                aria-pressed={showPassword}
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={1.75} aria-hidden />
                ) : (
                  <Eye size={18} strokeWidth={1.75} aria-hidden />
                )}
              </button>
            </div>
          </div>

          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        </main>
        <aside className={styles.visualMobile} aria-hidden="true">
          <Image
            src={ADMIN_LOGIN_VISUAL_MOBILE}
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.visualImage}
          />
        </aside>
      </div>
    </div>
  );
}
