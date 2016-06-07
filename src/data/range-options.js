// Units
var minutes = 60
var hours = 3600
var days = 86400

// Dataset for timespan picker
export const rangeOptions = [
  { label: "1 year",      content: { type:"relative", value: 365, unit: "DAYS" }},
  { label: "6 months",    content: { type:"relative", value: 180, unit: "DAYS" }},
  { label: "3 months",    content: { type:"relative", value: 90, unit: "DAYS" }},
  { label: "2 months",    content: { type:"relative", value: 60, unit: "DAYS" }},
  { label: "1.5 months",  content: { type:"relative", value: 45, unit: "DAYS" }},
  { label: "1 month",     content: { type:"relative", value: 30, unit: "DAYS" }, tickLabel: "mo" },
  { label: "3 weeks",     content: { type:"relative", value: 21, unit: "DAYS" }},
  { label: "2 weeks",     content: { type:"relative", value: 14, unit: "DAYS" }},
  { label: "10 days",     content: { type:"relative", value: 10, unit: "DAYS" }},
  { label: "7 days",      content: { type:"relative", value: 7, unit: "DAYS" }, tickLabel: "w" },
  { label: "5 days",      content: { type:"relative", value: 5, unit: "DAYS" }},
  { label: "3 days",      content: { type:"relative", value: 3, unit: "DAYS" }},
  { label: "2 days",      content: { type:"relative", value: 2, unit: "DAYS" }},
  { label: "1.5 days",    content: { type:"relative", value: 36, unit: "HOURS" }},
  { label: "1 day",       content: { type:"relative", value: 24, unit: "HOURS" }, tickLabel: "d" },
  { label: "18 hours",    content: { type:"relative", value: 18, unit: "HOURS" }},
  { label: "12 hours",    content: { type:"relative", value: 12, unit: "HOURS" }},
  { label: "9 hours",     content: { type:"relative", value: 9, unit: "HOURS" }},
  { label: "6 hours",     content: { type:"relative", value: 6, unit: "HOURS" }},
  { label: "4 hours",     content: { type:"relative", value: 4, unit: "HOURS" }},
  { label: "3 hours",     content: { type:"relative", value: 3, unit: "HOURS" }},
  { label: "2 hours",     content: { type:"relative", value: 2, unit: "HOURS" }},
  { label: "1.5 hours",   content: { type:"relative", value: 90, unit: "MINUTES" }},
  { label: "1 hour",      content: { type:"relative", value: 60, unit: "MINUTES" }, tickLabel: "h" },
  { label: "45 min",      content: { type:"relative", value: 45, unit: "MINUTES" }},
  { label: "30 min",      content: { type:"relative", value: 30, unit: "MINUTES" }},
  { label: "20 min",      content: { type:"relative", value: 20, unit: "MINUTES" }},
  { label: "15 min",      content: { type:"relative", value: 15, unit: "MINUTES" }},
  { label: "10 min",      content: { type:"relative", value: 10, unit: "MINUTES" }},
  { label: "5 min",       content: { type:"relative", value: 5, unit: "MINUTES" }},
  { label: "3 min",       content: { type:"relative", value: 3, unit: "MINUTES" }},
  { label: "2 min",       content: { type:"relative", value: 2, unit: "MINUTES" }},
  { label: "1 min",       content: { type:"relative", value: 60, unit: "SECONDS" }},
  { label: "30 sec",      content: { type:"relative", value: 30, unit: "SECONDS" }},
  { label: "15 sec",      content: { type:"relative", value: 15, unit: "SECONDS" }}
]

export default rangeOptions
