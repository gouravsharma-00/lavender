"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LayoutDashboard, Receipt, PiggyBank, User, Brain, Landmark  } from "lucide-react";
import { IMG } from "@constant";
import { useUser } from '@libs/hooks/useContext'

const navItems = [
  { href: "/client/app?tab=dashboard", icon: LayoutDashboard, label: "Dashboard", name: "dashboard" },
  { href: "/client/app?tab=transactions", icon: Receipt, label: "Transactions", name: "transactions" },
  { href: "/client/app?tab=budgets", icon: PiggyBank, label: "Budgets", name: "budgets" },
  { href: "/client/app?tab=ai", icon: Brain, label: "A.I", name: "ai" },
  { href: "/client/app?tab=investment", icon: Landmark , label: "Investment", name: "investment" },


];

export const Sidebar = () => {
  const params = useSearchParams();
  const tab = params.get("tab");
  const {email} = useUser();

  const user = { email: email };

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-[#D1D9E2] bg-[#FFFFFF]">
      <div className="flex h-full flex-col">
        
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-[#D1D9E2] px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffffff]">
            {/* <PiggyBank className="h-5 w-5 text-white" /> */}
            <img src={IMG.Favicon} className="h-9 w-9 text-white" />
          </div>
          <span className="text-lg font-semibold text-[#1E293B]">Lavender</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const isActive = tab === item.name;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#1B8F7B] text-white shadow-sm"
                      : "text-[#64748B] hover:bg-[#DCF4EE] hover:text-[#1B8F7B]"
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User section */}
        <div className="border-t border-[#D1D9E2] p-4">
          <div className="flex items-center gap-3 rounded-lg bg-[#E9EEF3] px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCF4EE]">
              <User className="h-4 w-4 text-[#1B8F7B]" />
            </div>
            <div className="flex-1 truncate">
              <p className="text-sm font-medium text-[#1E293B] truncate">
                Admin
              </p>
              <p className="text-xs text-[#64748B]">Free Plan</p>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};
