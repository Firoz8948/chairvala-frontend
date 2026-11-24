'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import adminService from '@/lib/services/admin';
import styles from './dashboard.module.css';
import { StatsCard, SalesChart } from './components';

const formatPrice = (value) => {
  const num = Number(value);
  if (Number.isNaN(num)) return '₹0';
  return `₹${num.toLocaleString('en-IN')}`;
};

const DASHBOARD_STAT_ICONS = {
  orders:
    'https://chairvala.b-cdn.net/basic_assets/Three%20Colorful%20Order%20Boxes%20with%20Checklists%20(1).png',
  revenue:
    'https://chairvala.b-cdn.net/basic_assets/Glossy%20Blue%20Package%20and%20Checklist%20(1).png',
  products:
    'https://chairvala.b-cdn.net/basic_assets/Verified%20Package%20Shipping%20Icon%20(1).png',
  customers:
    'https://chairvala.b-cdn.net/basic_assets/Customer%20Avatar%20Group%20with%20Cart%20and%20Checklist%20(1).png',
};

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    adminService
      .getDashboardStats()
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch((err) => {
        if (!cancelled) toast.error(err.message || 'Failed to load dashboard');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Overview</h1>

      <div className={styles.statsGrid}>
        <StatsCard
          label="Total Orders"
          value={loading ? '…' : String(stats?.total_orders ?? 0)}
          iconSrc={DASHBOARD_STAT_ICONS.orders}
        />
        <StatsCard
          label="Total Revenue"
          value={loading ? '…' : formatPrice(stats?.total_revenue ?? 0)}
          iconSrc={DASHBOARD_STAT_ICONS.revenue}
        />
        <StatsCard
          label="Active Products"
          value={loading ? '…' : String(stats?.active_products ?? stats?.total_products ?? 0)}
          iconSrc={DASHBOARD_STAT_ICONS.products}
        />
        <StatsCard
          label="Customers"
          value={loading ? '…' : String(stats?.total_customers ?? 0)}
          iconSrc={DASHBOARD_STAT_ICONS.customers}
        />
      </div>

      <SalesChart />
    </div>
  );
}
