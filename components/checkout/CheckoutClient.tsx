"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  FaShoppingBag,
  FaTimes,
  FaLock,
  FaCheck,
  FaCreditCard,
  FaPaypal,
  FaMoneyBillWave
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CheckoutClient: React.FC = () => {
  const { cart, cartTotal } = useCart();

  // State
  const [activeTab, setActiveTab] = useState<"card" | "paypal" | "zelle">("card");
  const [validated, setValidated] = useState<boolean>(false);
  const [showDemoNotice, setShowDemoNotice] = useState<boolean>(false);
  const [demoStatus, setDemoStatus] = useState<"success" | "failure" | "pending" | null>(null);

  // Form Fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    street: "",
    city: "",
    country: "United States",
    zip: "",
    state: "Indiana",
    cardNumber: "",
    expMonth: "Month",
    expYear: "Year",
    cvv: "",
    paypalEmail: "",
    zelleName: ""
  });

  // Errors state for validation feedback
  const [errors, setErrors] = useState<Record<string, string>>({});

  const orderTotal = cartTotal;

  // Handle inputs changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Mock card number autofill helpers
  const fillMockCard = (type: "success" | "failure") => {
    if (type === "success") {
      setFormData(prev => ({
        ...prev,
        cardNumber: "4111 1111 1111 1111",
        expMonth: "08",
        expYear: "2028",
        cvv: "123"
      }));
      setDemoStatus("success");
    } else {
      setFormData(prev => ({
        ...prev,
        cardNumber: "4000 0000 0000 0000",
        expMonth: "12",
        expYear: "2025",
        cvv: "999"
      }));
      setDemoStatus("failure");
    }
    // Clear errors for credit card fields
    setErrors(prev => {
      const updated = { ...prev };
      delete updated.cardNumber;
      delete updated.expMonth;
      delete updated.expYear;
      delete updated.cvv;
      return updated;
    });
  };

  // Form submission validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validate Basic Information
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Validate Billing Address
    if (!formData.street.trim()) newErrors.street = "Street address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zip.trim()) newErrors.zip = "Zip code is required";

    // Validate Payment Info based on Active Tab
    if (activeTab === "card") {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (formData.cardNumber.replace(/\s/g, "").length < 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
      if (formData.expMonth === "Month") newErrors.expMonth = "Expiration month is required";
      if (formData.expYear === "Year") newErrors.expYear = "Expiration year is required";
      if (!formData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (formData.cvv.length < 3) {
        newErrors.cvv = "CVV must be 3 or 4 digits";
      }
    } else if (activeTab === "paypal") {
      if (!formData.paypalEmail.trim()) {
        newErrors.paypalEmail = "PayPal Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.paypalEmail)) {
        newErrors.paypalEmail = "Please enter a valid email address";
      }
    } else if (activeTab === "zelle") {
      if (!formData.zelleName.trim()) {
        newErrors.zelleName = "Zelle account name or phone is required";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setValidated(true);

      // Scroll to the first error field
      const firstErrorKey = Object.keys(newErrors)[0];
      const errorElement = document.getElementsByName(firstErrorKey)[0];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // If validated, show success simulated notification
    setValidated(false);
    setShowDemoNotice(true);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-xl max-w-xl mx-auto my-12" style={{ fontFamily: "'Nunito', sans-serif" }}>
        <span className="text-6xl mb-4">🍦</span>
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 text-sm mt-2 max-w-xs">
          You don't have any items in your cart to checkout. Head back to the menu to add some delicious treats!
        </p>
        <Link href="/menu">
          <button className="mt-8 px-8 py-3 bg-[#046069] hover:bg-[#056170] text-white font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
            View Menu
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left animate-fadeIn" style={{ fontFamily: "'Nunito', sans-serif" }}>
      {/* Checkout Form (Left Column) */}
      <div className="lg:col-span-7 bg-white rounded-2xl shadow-md border border-gray-100 p-6 md:p-8">
        <form onSubmit={handleSubmit} noValidate>

          {/* Section 1: Basic Information */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-blue-600 text-blue-600 font-bold text-sm">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e]">
                Your information
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.firstName ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.lastName ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.email ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.phone ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                )}
              </div>
            </div>


          </div>

          {/* Section 2: Billing Address */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-blue-600 text-blue-600 font-bold text-sm">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e]">
                Billing address
              </h3>
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="Street"
                className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.street ? "border-red-500 bg-red-50/5" : "border-gray-200"
                  }`}
              />
              {errors.street && (
                <p className="text-xs text-red-500 mt-1 font-medium">{errors.street}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.city ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.city && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.city}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  readOnly
                  className="w-full h-11 border border-gray-200 rounded-md px-3.5 text-gray-500 text-sm focus:outline-none bg-gray-50 cursor-not-allowed"
                  placeholder="United States"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="Zip"
                  className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all ${errors.zip ? "border-red-500 bg-red-50/5" : "border-gray-200"
                    }`}
                />
                {errors.zip && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.zip}</p>
                )}
              </div>
              <div>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full h-11 border border-gray-200 rounded-md px-3 text-gray-600 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white"
                >
                  <option value="-">- Select State -</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 3: Payment Information */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-7 h-7 rounded-full border border-blue-600 text-blue-600 font-bold text-sm">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1e1e1e]">
                Payment Types
              </h3>
            </div>

            {/* Custom Payment Tabs */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button
                type="button"
                onClick={() => { setActiveTab("card"); setDemoStatus(null); }}
                className={`py-3 rounded-lg border text-sm font-semibold flex flex-col items-center justify-center gap-1.5 transition-all duration-200 relative ${activeTab === "card"
                    ? "border-[#008060] bg-[#f4fbf7] text-[#008060] font-bold"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
              >
                <FaCreditCard size={18} />
                <span>Card</span>
                {activeTab === "card" && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#008060] flex items-center justify-center text-white text-[9px]">
                    <FaCheck />
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab("paypal"); setDemoStatus(null); }}
                className={`py-3 rounded-lg border text-sm font-semibold flex flex-col items-center justify-center gap-1.5 transition-all duration-200 relative ${activeTab === "paypal"
                    ? "border-[#008060] bg-[#f4fbf7] text-[#008060] font-bold"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
              >
                <FaPaypal size={18} />
                <span>PayPal</span>
                {activeTab === "paypal" && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#008060] flex items-center justify-center text-white text-[9px]">
                    <FaCheck />
                  </div>
                )}
              </button>

              <button
                type="button"
                onClick={() => { setActiveTab("zelle"); setDemoStatus(null); }}
                className={`py-3 rounded-lg border text-sm font-semibold flex flex-col items-center justify-center gap-1.5 transition-all duration-200 relative ${activeTab === "zelle"
                    ? "border-[#008060] bg-[#f4fbf7] text-[#008060] font-bold"
                    : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
              >
                <FaMoneyBillWave size={18} />
                <span>Zelle</span>
                {activeTab === "zelle" && (
                  <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-[#008060] flex items-center justify-center text-white text-[9px]">
                    <FaCheck />
                  </div>
                )}
              </button>
            </div>

            {/* Payment Panel Fields */}
            <div className="border border-gray-100 rounded-xl p-4 bg-gray-50/50">
              {activeTab === "card" && (
                <div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 mb-3.5 gap-2">
                    <span className="font-semibold text-gray-600">Test Card Numbers:</span>
                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        onClick={() => fillMockCard("success")}
                        className="text-[#046069] hover:underline font-bold transition-all cursor-pointer"
                      >
                        Success
                      </button>
                      <span className="text-gray-300">|</span>
                      <button
                        type="button"
                        onClick={() => fillMockCard("failure")}
                        className="text-red-500 hover:underline font-bold transition-all cursor-pointer"
                      >
                        Payment Failure
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => {
                        // format value as 4-digit groups
                        const v = e.target.value.replace(/\D/g, "").substring(0, 16);
                        const matches = v.match(/\d{4,16}/g);
                        const match = (matches && matches[0]) || "";
                        const parts = [];
                        for (let i = 0, len = match.length; i < len; i += 4) {
                          parts.push(match.substring(i, i + 4));
                        }
                        const formatted = parts.length > 0 ? parts.join(" ") : v;
                        setFormData(prev => ({ ...prev, cardNumber: formatted }));
                        if (errors.cardNumber) {
                          setErrors(prev => ({ ...prev, cardNumber: "" }));
                        }
                      }}
                      placeholder="Credit Card Number"
                      className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.cardNumber ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.cardNumber && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.cardNumber}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <select
                        name="expMonth"
                        value={formData.expMonth}
                        onChange={handleChange}
                        className={`w-full h-11 border rounded-md px-2.5 text-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.expMonth ? "border-red-500" : "border-gray-200"
                          }`}
                      >
                        <option value="Month">Month</option>
                        {Array.from({ length: 12 }, (_, i) => {
                          const m = String(i + 1).padStart(2, "0");
                          return <option key={m} value={m}>{m}</option>;
                        })}
                      </select>
                      {errors.expMonth && (
                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.expMonth}</p>
                      )}
                    </div>
                    <div>
                      <select
                        name="expYear"
                        value={formData.expYear}
                        onChange={handleChange}
                        className={`w-full h-11 border rounded-md px-2.5 text-gray-500 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.expYear ? "border-red-500" : "border-gray-200"
                          }`}
                      >
                        <option value="Year">Year</option>
                        {Array.from({ length: 10 }, (_, i) => {
                          const y = String(new Date().getFullYear() + i);
                          return <option key={y} value={y}>{y}</option>;
                        })}
                      </select>
                      {errors.expYear && (
                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.expYear}</p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, "").substring(0, 4);
                            setFormData(prev => ({ ...prev, cvv: val }));
                            if (errors.cvv) {
                              setErrors(prev => ({ ...prev, cvv: "" }));
                            }
                          }}
                          placeholder="CVV"
                          className={`w-full h-11 border rounded-md pl-3.5 pr-8 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.cvv ? "border-red-500" : "border-gray-200"
                            }`}
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                          <FaCreditCard size={14} />
                        </div>
                      </div>
                      {errors.cvv && (
                        <p className="text-[10px] text-red-500 mt-1 font-medium">{errors.cvv}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "paypal" && (
                <div className="py-2">
                  <p className="text-xs text-gray-600 mb-3.5 leading-relaxed">
                    You will be directed to PayPal to complete your purchase securely. Enter your PayPal email to simulate this process:
                  </p>
                  <div>
                    <input
                      type="email"
                      name="paypalEmail"
                      value={formData.paypalEmail}
                      onChange={handleChange}
                      placeholder="PayPal Email Address"
                      className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.paypalEmail ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.paypalEmail && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.paypalEmail}</p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "zelle" && (
                <div className="py-2">
                  <div className="bg-[#5c2d91]/5 border border-[#5c2d91]/10 rounded-lg p-3 mb-4 text-xs text-gray-700 leading-normal">
                    <p className="font-bold text-[#5c2d91] mb-1.5 flex items-center gap-1">
                      <span>⚡</span> How to pay with Zelle:
                    </p>
                    <p>1. Open your banking app and select Zelle transfers.</p>
                    <p>2. Send the total amount to: <strong className="select-all text-gray-800"></strong></p>
                    <p>3. Enter your Zelle Registered Name/Phone below for us to verify your payment.</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zelleName"
                      value={formData.zelleName}
                      onChange={handleChange}
                      placeholder="Zelle Registered Name or Phone Number"
                      className={`w-full h-11 border rounded-md px-3.5 text-gray-800 text-sm focus:outline-none focus:border-blue-500 transition-all bg-white ${errors.zelleName ? "border-red-500" : "border-gray-200"
                        }`}
                    />
                    {errors.zelleName && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.zelleName}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-4 font-semibold text-center leading-relaxed">
            By clicking Checkout Now you agree to the{" "}
            <Link href="/terms" className="text-blue-600 hover:underline">
              Term of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>

          {/* Inline Demo Notice */}
          {/* <AnimatePresence>
            {showDemoNotice && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-5 bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-xl p-4 flex flex-col gap-1.5 shadow-sm relative overflow-hidden text-left"
              >
                <button
                  type="button"
                  onClick={() => setShowDemoNotice(false)}
                  className="absolute top-3 right-3 text-amber-500 hover:text-amber-800 cursor-pointer p-1"
                >
                  <FaTimes size={12} />
                </button>
                <span className="font-extrabold text-base flex items-center gap-1.5 text-amber-900">
                  {demoStatus === "failure" ? "❌ Payment Failed (Simulated)" : "⚠️ Order Processing Demo"}
                </span>
                <span>
                  {demoStatus === "failure" 
                    ? "Your payment card was rejected as simulated. Try using the Success link above to mock a successful card transaction."
                    : activeTab === "card" 
                      ? "Success! Card payment simulated successfully. This website is currently in frontend demonstration mode."
                      : activeTab === "paypal"
                        ? `Success! PayPal transaction simulated for ${formData.paypalEmail}. This is a frontend demonstration mode.`
                        : `Success! Zelle verification submitted for ${formData.zelleName}. This is a frontend demonstration mode.`}
                </span>
              </motion.div>
            )}
          </AnimatePresence> */}

          <button
            type="submit"
            className="w-full bg-[#008060] hover:bg-[#006e52] text-white font-bold py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-base uppercase tracking-wider"
          >
            Checkout Now
          </button>

          <div className="mt-4 flex flex-col items-center justify-center gap-1 text-[11px] text-gray-400 font-semibold">
            <span className="flex items-center gap-1">
              <FaLock size={10} className="text-gray-400" /> Secure server
            </span>
            <span>Safe and secure payment checkout.</span>
          </div>
        </form>
      </div>

      {/* Right Column (Purchase Details & Store Pickup Location) */}
      <div className="lg:col-span-5 flex flex-col gap-6">

        {/* Purchase Details */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gray-50 border-b border-gray-200 px-5 py-3">
            <h3 className="font-bold text-[#1e1e1e] text-sm uppercase tracking-wider">
              Purchase Details
            </h3>
          </div>
          <div className="p-5">
            <h4 className="font-bold text-gray-800 text-sm mb-4">
              Items in your Order
            </h4>

            {/* List of active cart items */}
            <div className="space-y-3 pb-4 border-b border-gray-100 max-h-[350px] overflow-y-auto pr-1">
              {cart.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 text-xs text-gray-700 py-1.5">
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center relative border border-gray-100">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-xl select-none">{item.categoryEmoji}</span>
                    )}
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm truncate leading-snug">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-[#c07f07] font-semibold mt-0.5">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>
                  </div>
                  {/* Price */}
                  <span className="font-bold text-gray-800 flex-shrink-0 text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="pt-4 space-y-2">
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm font-extrabold text-gray-800">Total</span>
                <span className="text-lg font-black text-[#008060]">
                  ${orderTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Notice info box */}
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Pickup Location</span>
              <span className="text-sm font-bold text-[#046069] mt-0.5">Frost Bite Avon</span>
              <span className="text-xs text-gray-600 mt-1 leading-normal">
                7025 Galen Dr W, Avon, IN 46123
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutClient;
