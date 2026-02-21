#!/usr/bin/env python3
"""
SEO Internal Linking + FAQ Schema Script
Task A1: Add internal links to all 35 blog articles
Task A2: Add FAQ schema frontmatter to 15+ articles

This script modifies MDX files in content/blog/ to add:
1. Cross-cluster internal links in Related Reading sections
2. Inline links within article bodies
3. CTA sections for research data tutorial articles
4. FAQ frontmatter for articles that don't have it
"""

import os
import re
import yaml

BLOG_DIR = "/Users/ding/maestro/projects/maestro/content/blog"

# ============================================================================
# CLUSTER DEFINITIONS
# ============================================================================

CLUSTER_1_RESEARCH = [
    "hidden-cost-manual-data-processing-academic-research",
    "how-to-choose-ai-research-data-service",
    "economists-toolkit-essential-ai-tools-empirical-research",
    "ai-powered-data-pipelines-social-science-research",
    "building-replication-packages-with-ai",
    "survey-data-to-insights-ai-automation-behavioral-scientists",
    "un-comtrade-api-python-tutorial-economists",
    "world-bank-wits-api-guide-trade-data",
    "fred-api-python-macroeconomic-data",
    "ipums-microdata-stata-r-extraction-guide",
    "eurostat-api-python-eu-statistics",
    "google-earth-engine-python-academic-research",
    "web-scraping-academic-data-python-guide",
]

CLUSTER_2_INDUSTRIES = [
    "ai-transforming-healthcare-diagnostics-2026",
    "ai-revolutionizing-legal-industry-contract-review",
    "ai-fintech-algorithmic-trading-risk-2026",
    "ai-personalized-education-learning-at-scale",
    "ai-smart-manufacturing-predictive-maintenance",
    "ai-retail-recommendation-engines-dynamic-pricing",
    "ai-agriculture-precision-farming-food-security",
]

CLUSTER_3_TRENDS = [
    "deepseek-vs-openai-open-source-ai-race-2026",
    "ai-agents-2026-from-chatbots-to-autonomous-workers",
    "ai-agents-future-autonomous-task-management",
    "vibe-coding-ai-software-development-revolution",
    "ai-search-engines-perplexity-google-future-2026",
    "mcp-protocol-anthropic-ai-integration-standard",
    "ai-video-generation-sora-kling-creator-economy",
    "eu-ai-act-compliance-guide-businesses-2026",
]

CLUSTER_4_SINGAPORE = [
    "singapore-budget-2026-ai-guide-eis-psg-champions",
    "singapore-smes-claim-400-percent-tax-deduction-ai-spending",
    "singapore-national-ai-council-enterprise-ai-adoption",
    "ai-startup-growth-metrics-benchmarks-2026",
]

CLUSTER_5_BEHAVIORAL = [
    "ai-transforming-behavioral-economics-research",
    "ai-reshaping-psychology-research-methods",
]

# Orphan
ORPHAN = ["ai-orchestration-why-single-model-not-enough"]

# ============================================================================
# ARTICLE TITLES (for generating link text)
# ============================================================================

TITLES = {
    "hidden-cost-manual-data-processing-academic-research": "The Hidden Cost of Manual Data Processing in Academic Research",
    "how-to-choose-ai-research-data-service": "How to Choose an AI Research Data Service",
    "economists-toolkit-essential-ai-tools-empirical-research": "The Economist's Toolkit: Essential AI Tools for Empirical Research",
    "ai-powered-data-pipelines-social-science-research": "AI-Powered Data Pipelines for Social Science Research",
    "building-replication-packages-with-ai": "Building Replication Packages with AI",
    "survey-data-to-insights-ai-automation-behavioral-scientists": "From Survey Data to Insights: AI Automation for Behavioral Scientists",
    "un-comtrade-api-python-tutorial-economists": "UN Comtrade API: Complete Python Tutorial for Economists",
    "world-bank-wits-api-guide-trade-data": "World Bank WITS API: Download Bilateral Trade Data",
    "fred-api-python-macroeconomic-data": "FRED API Python: Download Macroeconomic Data",
    "ipums-microdata-stata-r-extraction-guide": "IPUMS Microdata: Extract CPS and ACS Data",
    "eurostat-api-python-eu-statistics": "Eurostat API Python: Download EU Statistics",
    "google-earth-engine-python-academic-research": "Google Earth Engine for Academic Research",
    "web-scraping-academic-data-python-guide": "Web Scraping for Academic Research: Python Guide",
    "ai-transforming-healthcare-diagnostics-2026": "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools",
    "ai-revolutionizing-legal-industry-contract-review": "AI Legal Tech: Contract Review in 26 Seconds vs 92 Minutes",
    "ai-fintech-algorithmic-trading-risk-2026": "AI in Finance: How Hedge Funds Use Machine Learning",
    "ai-personalized-education-learning-at-scale": "AI in Education: Personalized Learning at Scale",
    "ai-smart-manufacturing-predictive-maintenance": "AI in Manufacturing: Predictive Maintenance Cuts Downtime by 50%",
    "ai-retail-recommendation-engines-dynamic-pricing": "AI in Retail: Recommendation Engines and Dynamic Pricing",
    "ai-agriculture-precision-farming-food-security": "AI in Agriculture: Precision Farming and Food Security",
    "deepseek-vs-openai-open-source-ai-race-2026": "DeepSeek vs OpenAI: The Open-Source AI Race",
    "ai-agents-2026-from-chatbots-to-autonomous-workers": "AI Agents in 2026: From Chatbots to Autonomous Workers",
    "ai-agents-future-autonomous-task-management": "AI Agents for Task Management: Save 28% of Work Time",
    "vibe-coding-ai-software-development-revolution": "Vibe Coding: How AI Is Making Everyone a Developer",
    "ai-search-engines-perplexity-google-future-2026": "AI Search: How Perplexity and SearchGPT Challenge Google",
    "mcp-protocol-anthropic-ai-integration-standard": "MCP: The USB-C of AI -- Anthropic's Protocol",
    "ai-video-generation-sora-kling-creator-economy": "AI Video Generation: Sora, Kling, and the Creator Economy",
    "eu-ai-act-compliance-guide-businesses-2026": "EU AI Act 2026: The Compliance Guide",
    "singapore-budget-2026-ai-guide-eis-psg-champions": "Singapore Budget 2026 AI Guide: EIS, PSG, and Champions",
    "singapore-smes-claim-400-percent-tax-deduction-ai-spending": "Singapore SMEs: 400% Tax Deduction on AI Spending",
    "singapore-national-ai-council-enterprise-ai-adoption": "Singapore's National AI Council and Enterprise AI",
    "ai-startup-growth-metrics-benchmarks-2026": "AI Startup Growth Benchmarks 2026",
    "ai-transforming-behavioral-economics-research": "AI for Behavioral Economics: 4x Faster Experiments",
    "ai-reshaping-psychology-research-methods": "How AI Is Reshaping Psychology Research Methods",
    "ai-orchestration-why-single-model-not-enough": "AI Orchestration: 94% vs 67% Task Completion",
}

# ============================================================================
# RELATED READING LINKS (new links to add per article)
# Each article gets links to 3-5 related articles from its cluster + cross-cluster
# ============================================================================

RELATED_READING = {
    # Cluster 1 -- Research Data
    "hidden-cost-manual-data-processing-academic-research": [
        ("how-to-choose-ai-research-data-service", "How to Choose an AI Research Data Service: 2026 Buyer's Guide"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
        ("ai-powered-data-pipelines-social-science-research", "AI-Powered Data Pipelines for Social Science Research"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
    ],
    "how-to-choose-ai-research-data-service": [
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
        ("ai-powered-data-pipelines-social-science-research", "AI-Powered Data Pipelines for Social Science Research"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
    ],
    "economists-toolkit-essential-ai-tools-empirical-research": [
        ("ai-powered-data-pipelines-social-science-research", "AI-Powered Data Pipelines for Social Science Research"),
        ("survey-data-to-insights-ai-automation-behavioral-scientists", "From Survey Data to Insights: AI Automation for Behavioral Scientists"),
        ("how-to-choose-ai-research-data-service", "How to Choose an AI Research Data Service: 2026 Buyer's Guide"),
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("un-comtrade-api-python-tutorial-economists", "UN Comtrade API: Complete Python Tutorial for Economists"),
    ],
    "ai-powered-data-pipelines-social-science-research": [
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
        ("survey-data-to-insights-ai-automation-behavioral-scientists", "From Survey Data to Insights: AI Automation for Behavioral Scientists"),
    ],
    "building-replication-packages-with-ai": [
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
        ("how-to-choose-ai-research-data-service", "How to Choose an AI Research Data Service: 2026 Buyer's Guide"),
        ("ai-powered-data-pipelines-social-science-research", "AI-Powered Data Pipelines for Social Science Research"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
    ],
    "survey-data-to-insights-ai-automation-behavioral-scientists": [
        ("ai-transforming-behavioral-economics-research", "AI for Behavioral Economics: 4x Faster Experiments"),
        ("ai-reshaping-psychology-research-methods", "How AI Is Reshaping Psychology Research Methods"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
    ],
    "un-comtrade-api-python-tutorial-economists": [
        ("world-bank-wits-api-guide-trade-data", "World Bank WITS API: Download Bilateral Trade Data for Research"),
        ("eurostat-api-python-eu-statistics", "Eurostat API Python: Download EU Statistics"),
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "world-bank-wits-api-guide-trade-data": [
        ("un-comtrade-api-python-tutorial-economists", "UN Comtrade API: Complete Python Tutorial for Economists"),
        ("eurostat-api-python-eu-statistics", "Eurostat API Python: Download EU Statistics"),
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "fred-api-python-macroeconomic-data": [
        ("un-comtrade-api-python-tutorial-economists", "UN Comtrade API: Complete Python Tutorial for Economists"),
        ("eurostat-api-python-eu-statistics", "Eurostat API Python: Download EU Statistics"),
        ("ipums-microdata-stata-r-extraction-guide", "IPUMS Microdata: Extract CPS and ACS Data"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "ipums-microdata-stata-r-extraction-guide": [
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("web-scraping-academic-data-python-guide", "Web Scraping for Academic Research: Python Guide"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "eurostat-api-python-eu-statistics": [
        ("un-comtrade-api-python-tutorial-economists", "UN Comtrade API: Complete Python Tutorial for Economists"),
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("world-bank-wits-api-guide-trade-data", "World Bank WITS API: Download Bilateral Trade Data for Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
    ],
    "google-earth-engine-python-academic-research": [
        ("fred-api-python-macroeconomic-data", "FRED API Python: Download Macroeconomic Data for Research"),
        ("web-scraping-academic-data-python-guide", "Web Scraping for Academic Research: Python Guide"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "web-scraping-academic-data-python-guide": [
        ("un-comtrade-api-python-tutorial-economists", "UN Comtrade API: Complete Python Tutorial for Economists"),
        ("ipums-microdata-stata-r-extraction-guide", "IPUMS Microdata: Extract CPS and ACS Data"),
        ("google-earth-engine-python-academic-research", "Google Earth Engine for Academic Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI: A Complete Guide"),
    ],

    # Cluster 2 -- AI Industries
    "ai-transforming-healthcare-diagnostics-2026": [
        ("ai-revolutionizing-legal-industry-contract-review", "AI Legal Tech: Contract Review in 26 Seconds"),
        ("ai-fintech-algorithmic-trading-risk-2026", "AI in Finance: How Hedge Funds Use Machine Learning"),
        ("ai-smart-manufacturing-predictive-maintenance", "AI in Manufacturing: Predictive Maintenance Cuts Downtime by 50%"),
        ("eu-ai-act-compliance-guide-businesses-2026", "EU AI Act 2026: The Compliance Guide"),
    ],
    "ai-revolutionizing-legal-industry-contract-review": [
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("ai-fintech-algorithmic-trading-risk-2026", "AI in Finance: How Hedge Funds Use Machine Learning"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("eu-ai-act-compliance-guide-businesses-2026", "EU AI Act 2026: The Compliance Guide"),
    ],
    "ai-fintech-algorithmic-trading-risk-2026": [
        ("ai-revolutionizing-legal-industry-contract-review", "AI Legal Tech: Contract Review in 26 Seconds"),
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("ai-retail-recommendation-engines-dynamic-pricing", "AI in Retail: Recommendation Engines and Dynamic Pricing"),
        ("ai-startup-growth-metrics-benchmarks-2026", "AI Startup Growth Benchmarks 2026"),
    ],
    "ai-personalized-education-learning-at-scale": [
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("ai-agriculture-precision-farming-food-security", "AI in Agriculture: Precision Farming and Food Security"),
        ("ai-reshaping-psychology-research-methods", "How AI Is Reshaping Psychology Research Methods"),
    ],
    "ai-smart-manufacturing-predictive-maintenance": [
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("ai-retail-recommendation-engines-dynamic-pricing", "AI in Retail: Recommendation Engines and Dynamic Pricing"),
        ("ai-agriculture-precision-farming-food-security", "AI in Agriculture: Precision Farming and Food Security"),
        ("ai-fintech-algorithmic-trading-risk-2026", "AI in Finance: How Hedge Funds Use Machine Learning"),
    ],
    "ai-retail-recommendation-engines-dynamic-pricing": [
        ("ai-fintech-algorithmic-trading-risk-2026", "AI in Finance: How Hedge Funds Use Machine Learning"),
        ("ai-smart-manufacturing-predictive-maintenance", "AI in Manufacturing: Predictive Maintenance Cuts Downtime by 50%"),
        ("ai-personalized-education-learning-at-scale", "AI in Education: Personalized Learning at Scale"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
    ],
    "ai-agriculture-precision-farming-food-security": [
        ("ai-smart-manufacturing-predictive-maintenance", "AI in Manufacturing: Predictive Maintenance Cuts Downtime by 50%"),
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("google-earth-engine-python-academic-research", "Google Earth Engine for Academic Research: Python API Guide"),
        ("ai-personalized-education-learning-at-scale", "AI in Education: Personalized Learning at Scale"),
    ],

    # Cluster 3 -- AI Trends
    "deepseek-vs-openai-open-source-ai-race-2026": [
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("ai-search-engines-perplexity-google-future-2026", "AI Search: How Perplexity and SearchGPT Challenge Google"),
    ],
    "ai-agents-2026-from-chatbots-to-autonomous-workers": [
        ("ai-agents-future-autonomous-task-management", "AI Agents for Task Management: Save 28% of Work Time"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("ai-orchestration-why-single-model-not-enough", "AI Orchestration: 94% vs 67% Task Completion"),
    ],
    "ai-agents-future-autonomous-task-management": [
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("ai-orchestration-why-single-model-not-enough", "AI Orchestration: 94% vs 67% Task Completion"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
    ],
    "vibe-coding-ai-software-development-revolution": [
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("ai-search-engines-perplexity-google-future-2026", "AI Search: How Perplexity and SearchGPT Challenge Google"),
    ],
    "ai-search-engines-perplexity-google-future-2026": [
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("ai-video-generation-sora-kling-creator-economy", "AI Video Generation: Sora, Kling, and the Creator Economy"),
    ],
    "mcp-protocol-anthropic-ai-integration-standard": [
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
        ("ai-orchestration-why-single-model-not-enough", "AI Orchestration: 94% vs 67% Task Completion"),
    ],
    "ai-video-generation-sora-kling-creator-economy": [
        ("ai-search-engines-perplexity-google-future-2026", "AI Search: How Perplexity and SearchGPT Challenge Google"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
    ],
    "eu-ai-act-compliance-guide-businesses-2026": [
        ("ai-transforming-healthcare-diagnostics-2026", "AI in Healthcare: From 95% Diagnostic Accuracy to FDA-Approved Tools"),
        ("ai-revolutionizing-legal-industry-contract-review", "AI Legal Tech: Contract Review in 26 Seconds"),
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("singapore-budget-2026-ai-guide-eis-psg-champions", "Singapore Budget 2026 AI Guide"),
    ],

    # Cluster 4 -- Singapore
    "singapore-budget-2026-ai-guide-eis-psg-champions": [
        ("singapore-smes-claim-400-percent-tax-deduction-ai-spending", "How Singapore SMEs Can Claim 400% Tax Deduction on AI Spending"),
        ("singapore-national-ai-council-enterprise-ai-adoption", "Singapore's National AI Council and Enterprise AI"),
        ("ai-startup-growth-metrics-benchmarks-2026", "AI Startup Growth Benchmarks 2026"),
        ("eu-ai-act-compliance-guide-businesses-2026", "EU AI Act 2026: The Compliance Guide"),
    ],
    "singapore-smes-claim-400-percent-tax-deduction-ai-spending": [
        ("singapore-budget-2026-ai-guide-eis-psg-champions", "Singapore Budget 2026 AI Guide: EIS, PSG, and Champions"),
        ("singapore-national-ai-council-enterprise-ai-adoption", "Singapore's National AI Council and Enterprise AI"),
        ("ai-startup-growth-metrics-benchmarks-2026", "AI Startup Growth Benchmarks 2026"),
        ("how-to-choose-ai-research-data-service", "How to Choose an AI Research Data Service"),
    ],
    "singapore-national-ai-council-enterprise-ai-adoption": [
        ("singapore-budget-2026-ai-guide-eis-psg-champions", "Singapore Budget 2026 AI Guide: EIS, PSG, and Champions"),
        ("singapore-smes-claim-400-percent-tax-deduction-ai-spending", "How Singapore SMEs Can Claim 400% Tax Deduction on AI Spending"),
        ("ai-startup-growth-metrics-benchmarks-2026", "AI Startup Growth Benchmarks 2026"),
        ("eu-ai-act-compliance-guide-businesses-2026", "EU AI Act 2026: The Compliance Guide"),
    ],
    "ai-startup-growth-metrics-benchmarks-2026": [
        ("singapore-budget-2026-ai-guide-eis-psg-champions", "Singapore Budget 2026 AI Guide: EIS, PSG, and Champions"),
        ("singapore-smes-claim-400-percent-tax-deduction-ai-spending", "How Singapore SMEs Can Claim 400% Tax Deduction on AI Spending"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
    ],

    # Cluster 5 -- Behavioral
    "ai-transforming-behavioral-economics-research": [
        ("ai-reshaping-psychology-research-methods", "How AI Is Reshaping Psychology Research Methods"),
        ("survey-data-to-insights-ai-automation-behavioral-scientists", "From Survey Data to Insights: AI Automation for Behavioral Scientists"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("hidden-cost-manual-data-processing-academic-research", "The Hidden Cost of Manual Data Processing in Academic Research"),
    ],
    "ai-reshaping-psychology-research-methods": [
        ("ai-transforming-behavioral-economics-research", "AI for Behavioral Economics: 4x Faster Experiments"),
        ("survey-data-to-insights-ai-automation-behavioral-scientists", "From Survey Data to Insights: AI Automation for Behavioral Scientists"),
        ("economists-toolkit-essential-ai-tools-empirical-research", "The Economist's Toolkit: Essential AI Tools for Empirical Research"),
        ("building-replication-packages-with-ai", "Building Replication Packages with AI"),
    ],

    # Orphan
    "ai-orchestration-why-single-model-not-enough": [
        ("ai-agents-2026-from-chatbots-to-autonomous-workers", "AI Agents in 2026: From Chatbots to Autonomous Workers"),
        ("mcp-protocol-anthropic-ai-integration-standard", "MCP: The USB-C of AI -- Anthropic's Protocol"),
        ("vibe-coding-ai-software-development-revolution", "Vibe Coding: How AI Is Making Everyone a Developer"),
        ("deepseek-vs-openai-open-source-ai-race-2026", "DeepSeek vs OpenAI: The Open-Source AI Race"),
    ],
}

# ============================================================================
# FAQ DATA for articles that don't have FAQ yet (Task A2)
# ============================================================================

FAQ_DATA = {
    "un-comtrade-api-python-tutorial-economists": [
        {"question": "Is UN Comtrade API free to use?", "answer": "Yes. The UN Comtrade API is free for all users. You need to register at comtradeplus.un.org for an API subscription key. The free tier allows 500 requests per day and up to 250,000 records per request. Institutional subscriptions remove rate limits for bulk extraction."},
        {"question": "How do I download bilateral trade data with Python?", "answer": "Use the requests library to call the Comtrade Plus API v2 endpoint at comtradeapi.un.org/data/v1/get/C/A/HS with your subscription key in the header. Specify reporterCode, partnerCode, cmdCode (HS product code), and period (year) as query parameters. The comtradeapicall Python package also provides a wrapper."},
        {"question": "What is the difference between reporter and mirror trade statistics in Comtrade?", "answer": "Reporter statistics are what a country reports about its own trade. Mirror statistics come from the partner country reporting the same trade from the other side. These rarely agree exactly due to CIF/FOB adjustments, timing differences, and classification discrepancies. Use the exporter's own report for export value and the importer's report for import value."},
    ],
    "world-bank-wits-api-guide-trade-data": [
        {"question": "Does WITS API require an API key?", "answer": "No. The World Bank WITS REST API is publicly accessible without registration or an API key. This is a significant practical advantage over UN Comtrade. However, WITS has undocumented rate limits enforced through connection throttling -- add 6-8 second delays between requests for bulk extractions."},
        {"question": "What is the difference between WITS and UN Comtrade data?", "answer": "WITS aggregates and harmonizes data from UN Comtrade, applies quality filters, and integrates tariff data from UNCTAD TRAINS. WITS also offers BACI-harmonized bilateral flows that reconcile CIF/FOB differences. Use WITS for policy research needing tariff data; use Comtrade for raw reported flows or monthly frequency data."},
        {"question": "How do I extract tariff data alongside trade flows from WITS?", "answer": "Tariff data uses a separate WITS endpoint: tradestats-tariff. The indicator code for applied MFN tariff rates is MFN-WGHTD-AVRG (weighted average). The product and partner dimensions work identically to the trade flow endpoint. Preferential tariff rates from bilateral agreements have less complete coverage."},
    ],
    "deepseek-vs-openai-open-source-ai-race-2026": [
        {"question": "Is DeepSeek truly open source?", "answer": "DeepSeek releases model weights under permissive licenses, making them available for download and modification. However, the training data, infrastructure details, and some architectural innovations are not fully disclosed. It is more accurately described as 'open-weight' rather than fully open source in the traditional software sense."},
        {"question": "How much did it cost to train DeepSeek R1?", "answer": "DeepSeek disclosed $5.6M for the V3 base model training using 2,048 NVIDIA H800 GPUs over 55 days, plus $294K for the R1 reinforcement learning phase. However, this excludes hardware acquisition ($51M+), infrastructure, research salaries, and failed experiments. Total investment is estimated well above $500M."},
        {"question": "How does DeepSeek R1 compare to GPT-4 on benchmarks?", "answer": "DeepSeek R1 matches or exceeds GPT-4 on several reasoning benchmarks including MATH, AIME, and coding tasks, at a fraction of the disclosed training cost. Performance varies by task type -- GPT-4 retains advantages in certain creative and multilingual tasks. The competitive gap has narrowed dramatically."},
    ],
    "ai-agents-2026-from-chatbots-to-autonomous-workers": [
        {"question": "What are AI agents and how do they differ from chatbots?", "answer": "An AI agent is a software system that can perceive its environment, make decisions, and take actions autonomously to achieve goals. Unlike chatbots that respond to individual prompts, agents can plan multi-step workflows, use external tools (APIs, databases, code execution), maintain memory across interactions, and operate with minimal human oversight."},
        {"question": "What is Salesforce Agentforce?", "answer": "Salesforce Agentforce is an enterprise AI agent platform that reached 18,500 customers by early 2026. It allows businesses to deploy AI agents that handle customer service, sales operations, and business workflows within the Salesforce ecosystem. Agents can access CRM data, execute transactions, and escalate to humans when needed."},
        {"question": "Will AI agents replace human workers?", "answer": "The evidence suggests augmentation rather than wholesale replacement. Klarna initially replaced 700 customer service agents with AI, then reversed course and started rehiring humans. The most successful deployments use AI agents for routine, high-volume tasks while humans handle complex cases requiring judgment, empathy, and creative problem-solving."},
    ],
    "vibe-coding-ai-software-development-revolution": [
        {"question": "What is vibe coding?", "answer": "Vibe coding is an AI-assisted software development practice coined by Andrej Karpathy in February 2025. The developer describes what they want in natural language, an LLM generates the code, and the developer accepts it based on results and testing rather than reading every line. The developer's value shifts from syntax knowledge to problem decomposition and quality judgment."},
        {"question": "What percentage of developers use AI coding tools?", "answer": "As of 2026, 92% of US developers use AI coding tools daily according to industry surveys. GitHub Copilot alone has over 15 million users. AI generates approximately 46% of all code written by developers. The adoption rate has increased from roughly 30% in 2023 to near-universal in professional development environments."},
        {"question": "What is the difference between vibe coding and agentic engineering?", "answer": "Vibe coding refers to accepting AI-generated code without closely reviewing its internals. Agentic engineering, Karpathy's updated term, involves orchestrating autonomous coding agents that can plan, execute, test, and iterate on entire features with minimal human intervention. The evolution reflects the shift from autocomplete-style assistance to fully autonomous development workflows."},
    ],
    "ai-search-engines-perplexity-google-future-2026": [
        {"question": "How do AI search engines like Perplexity work?", "answer": "AI search engines combine web retrieval with large language model synthesis. When you ask a question, the system searches the web for relevant sources, reads and analyzes the content, then generates a direct answer with citations. Unlike traditional search which returns links, AI search provides synthesized answers. Perplexity has 45M+ monthly active users as of 2026."},
        {"question": "Are AI search engines replacing Google?", "answer": "Not replacing, but fragmenting Google's dominance. 65% of Google searches now end without a click (zero-click searches), and AI Overviews reduce organic CTR by 61%. Perplexity has reached 45M+ monthly active users and an $18B+ valuation. Google is adapting with its own AI Overviews, but the era of search-as-traffic-source is diminishing."},
        {"question": "What is answer engine optimization (AEO)?", "answer": "AEO is the practice of optimizing content to be cited by AI search engines and answer systems. Unlike traditional SEO which targets link rankings, AEO focuses on structured content, clear factual answers, authoritative sourcing, and formats that AI systems can easily extract and synthesize. It is becoming essential as AI-generated answers replace traditional search results."},
    ],
    "mcp-protocol-anthropic-ai-integration-standard": [
        {"question": "What is MCP (Model Context Protocol)?", "answer": "MCP is an open standard developed by Anthropic that defines how AI systems connect to external tools, data sources, and services. It eliminates the need for custom integrations between each AI model and each tool by providing a universal interface. Any AI system that speaks MCP can connect to any MCP-compatible server. It is now governed by the Linux Foundation."},
        {"question": "Which AI companies support MCP?", "answer": "MCP has been adopted by major AI companies including OpenAI, Google, Microsoft, and Anthropic. The ecosystem has grown to over 10,000 active MCP servers. IDE platforms like Cursor and Windsurf, cloud providers, and enterprise tools have integrated MCP support. It is emerging as the de facto standard for AI tool integration."},
        {"question": "How does MCP compare to function calling in ChatGPT?", "answer": "Function calling is proprietary to each AI provider and requires custom implementation for each model-tool combination. MCP is an open standard that works across all AI models -- build one MCP server and it works with Claude, GPT-4, Gemini, and any MCP-compatible client. MCP also handles capability discovery, authentication, and bidirectional communication that simple function calling does not support."},
    ],
    "ai-video-generation-sora-kling-creator-economy": [
        {"question": "How much does AI video generation cost compared to traditional production?", "answer": "AI video generation reduces production costs by up to 96% compared to traditional methods. A Super Bowl-quality commercial that once required a $5M budget can now be produced for a few thousand dollars. Kling AI serves 60M+ creators worldwide with accessible pricing tiers starting at free."},
        {"question": "Which AI video platform is best in 2026?", "answer": "The leading platforms are Sora 2 (OpenAI) for physics-accurate generation, Kling 3.0 (Kuaishou) with $240M ARR and 60M+ users, and Veo 2 (Google). Each has distinct strengths: Sora excels at realistic physics simulation, Kling leads in accessibility and creator tools, and Veo integrates with Google's ecosystem. The choice depends on use case and budget."},
        {"question": "Can AI-generated videos be used commercially?", "answer": "Yes, most platforms offer commercial licenses for AI-generated content. However, businesses must verify the specific platform's terms of service, ensure generated content does not infringe on copyrighted material, and comply with emerging disclosure requirements. The EU AI Act requires labeling AI-generated content in certain contexts. 90% of advertisers plan to use AI video tools by 2026."},
    ],
    "eu-ai-act-compliance-guide-businesses-2026": [
        {"question": "When does the EU AI Act take effect?", "answer": "The EU AI Act entered into force on August 1, 2024, with obligations rolling out in phases. Prohibited AI practice bans took effect February 2, 2025. GPAI model rules became applicable August 2, 2025. The bulk of high-risk AI system compliance requirements take effect August 2, 2026. Full enforcement including penalties applies from that date."},
        {"question": "What are the penalties under the EU AI Act?", "answer": "Penalties scale up to 35 million EUR or 7% of global annual turnover (whichever is higher) for prohibited AI practice violations. High-risk system non-compliance penalties reach 15 million EUR or 3% of turnover. Providing incorrect information to authorities carries fines up to 7.5 million EUR or 1% of turnover."},
        {"question": "Does the EU AI Act apply to companies outside Europe?", "answer": "Yes. The Act applies to any organization placing AI systems on the EU market or whose AI system outputs are used within the EU, regardless of where the company is headquartered. This extraterritorial scope means US, Asian, and other non-EU companies serving European customers must comply."},
    ],
    "singapore-budget-2026-ai-guide-eis-psg-champions": [
        {"question": "What AI grants are available in Singapore Budget 2026?", "answer": "Key programmes include: Enterprise Innovation Scheme (EIS) offering 400% tax deduction on qualifying AI spending up to SGD 50,000; Productivity Solutions Grant (PSG) providing direct grant funding for SME AI adoption; Champions of AI Programme for end-to-end AI transformation; and SkillsFuture AI Pathways for workforce training with 6 months free premium AI tools."},
        {"question": "How much tax savings can I get from the EIS AI deduction?", "answer": "The maximum qualifying AI expenditure is SGD 50,000 per Year of Assessment. With the 400% deduction, this yields SGD 200,000 in tax deductions. At Singapore's 17% corporate tax rate, the maximum cash savings is SGD 34,000 per year, effectively recovering 68% of your qualifying AI investment."},
        {"question": "Who qualifies for the PSG AI grant in Singapore?", "answer": "PSG is available to SMEs registered and operating in Singapore with at least 30% local shareholding, group annual sales turnover below SGD 100 million or group employment below 200 workers. The grant covers pre-approved AI and digital solutions from a list of approved vendors maintained by IMDA."},
    ],
    "ai-startup-growth-metrics-benchmarks-2026": [
        {"question": "What are good SaaS growth metrics for AI startups in 2026?", "answer": "Top-quartile AI startups reach $1M ARR within 6-8 months and $10M ARR within 18-24 months -- roughly 2x faster than traditional SaaS benchmarks. Net revenue retention above 130% is common for AI products due to usage-based pricing expansion. Median Series A round is $15-25M at 80-120x ARR multiples for AI-native companies."},
        {"question": "How fast are AI startups growing compared to traditional SaaS?", "answer": "AI startups are reaching revenue milestones 2-3x faster than historical SaaS benchmarks. Companies like Cursor reached significant ARR with zero marketing spend. Harvey AI grew from $50M to $195M ARR in a single year (3.9x). The fastest AI companies reach $100M ARR in under 3 years, compared to 7-10 years for traditional SaaS."},
        {"question": "What is a good burn multiple for an AI startup?", "answer": "A burn multiple under 2x is considered excellent for AI startups at the growth stage -- meaning for every $2 burned, $1 of new ARR is generated. Top performers achieve sub-1x burn multiples. AI companies often have higher initial burn due to compute costs but can achieve efficient growth through usage-based pricing models that expand naturally with customer adoption."},
    ],
}

# ============================================================================
# INLINE LINKS -- specific text replacements to add inline links in body
# ============================================================================

INLINE_LINKS = {
    # Cluster 2 industries -- add cross-links in body text
    "ai-transforming-healthcare-diagnostics-2026": [
        ("AI Orchestration in 2026: 94% vs 67% Task Completion", "[AI Orchestration in 2026: 94% vs 67% Task Completion](/blog/ai-orchestration-why-single-model-not-enough)"),
    ],
    "ai-revolutionizing-legal-industry-contract-review": [
        ("AI Orchestration in 2026: 94% vs 67% Task Completion", "[AI Orchestration in 2026: 94% vs 67% Task Completion](/blog/ai-orchestration-why-single-model-not-enough)"),
    ],
    "ai-fintech-algorithmic-trading-risk-2026": [
        ("AI Orchestration in 2026: 94% vs 67% Task Completion", "[AI Orchestration in 2026: 94% vs 67% Task Completion](/blog/ai-orchestration-why-single-model-not-enough)"),
    ],
    # Add cross-cluster links from research tutorials to each other
    "economists-toolkit-essential-ai-tools-empirical-research": [
        ("FRED, World Bank, Census Bureau, or Eurostat APIs",
         "[FRED](/blog/fred-api-python-macroeconomic-data), [World Bank](/blog/world-bank-wits-api-guide-trade-data), Census Bureau, or [Eurostat](/blog/eurostat-api-python-eu-statistics) APIs"),
    ],
}


def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def split_frontmatter(content):
    """Split MDX content into frontmatter YAML and body."""
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            return parts[1], parts[2]
    return "", content


def join_frontmatter(fm_str, body):
    return f"---{fm_str}---{body}"


def add_faq_to_frontmatter(fm_str, faq_items):
    """Add FAQ items to frontmatter YAML string."""
    # Check if faq already exists
    if "faq:" in fm_str:
        return fm_str  # already has FAQ

    # Find the right place to insert (before seo: or at end)
    lines = fm_str.split("\n")
    insert_idx = len(lines)

    # Insert before seo: block if it exists
    for i, line in enumerate(lines):
        if line.startswith("seo:"):
            insert_idx = i
            break

    # Build FAQ YAML
    faq_lines = ["faq:"]
    for item in faq_items:
        q = item["question"].replace('"', '\\"')
        a = item["answer"].replace('"', '\\"')
        faq_lines.append(f'  - question: "{q}"')
        faq_lines.append(f'    answer: "{a}"')

    # Insert
    lines = lines[:insert_idx] + faq_lines + lines[insert_idx:]
    return "\n".join(lines)


def update_related_reading(body, slug, new_links):
    """Replace or add Related Reading section with new links."""
    # Build new Related Reading section
    link_lines = []
    for link_slug, link_title in new_links:
        link_lines.append(f"- [{link_title}](/blog/{link_slug})")
    new_section = "## Related Reading\n\n" + "\n".join(link_lines)

    # Check if Related Reading exists
    if "## Related Reading" in body:
        # Replace existing section -- find from ## Related Reading to next --- or end
        pattern = r"## Related Reading\n\n(?:- \[.*?\]\(.*?\)\n?)+"
        body = re.sub(pattern, new_section + "\n", body)
    else:
        # Add before the final --- line (the footer separator)
        # Find the last --- that's on its own line
        if "\n---\n" in body:
            # Insert before the last ---
            last_sep = body.rfind("\n---\n")
            body = body[:last_sep] + "\n\n" + new_section + "\n" + body[last_sep:]
        else:
            # Just append
            body = body.rstrip() + "\n\n" + new_section + "\n"

    return body


def add_inline_links(body, replacements):
    """Add inline links in article body."""
    for old_text, new_text in replacements:
        # Only replace if not already a link
        if old_text in body and f"[{old_text}]" not in body:
            body = body.replace(old_text, new_text, 1)
    return body


def process_article(slug):
    """Process a single article: add FAQ and update links."""
    filepath = os.path.join(BLOG_DIR, f"{slug}.mdx")
    if not os.path.exists(filepath):
        print(f"SKIP: {slug} (file not found)")
        return False

    content = read_file(filepath)
    fm_str, body = split_frontmatter(content)

    modified = False

    # Task A2: Add FAQ if needed
    if slug in FAQ_DATA:
        old_fm = fm_str
        fm_str = add_faq_to_frontmatter(fm_str, FAQ_DATA[slug])
        if fm_str != old_fm:
            modified = True
            print(f"  + Added FAQ to {slug}")

    # Task A1: Update Related Reading
    if slug in RELATED_READING:
        old_body = body
        body = update_related_reading(body, slug, RELATED_READING[slug])
        if body != old_body:
            modified = True
            print(f"  + Updated Related Reading in {slug}")

    # Task A1: Add inline links
    if slug in INLINE_LINKS:
        old_body = body
        body = add_inline_links(body, INLINE_LINKS[slug])
        if body != old_body:
            modified = True
            print(f"  + Added inline links in {slug}")

    if modified:
        write_file(filepath, join_frontmatter(fm_str, body))
        return True
    return False


def main():
    all_slugs = (
        CLUSTER_1_RESEARCH
        + CLUSTER_2_INDUSTRIES
        + CLUSTER_3_TRENDS
        + CLUSTER_4_SINGAPORE
        + CLUSTER_5_BEHAVIORAL
        + ORPHAN
    )

    total = 0
    modified = 0

    for slug in all_slugs:
        total += 1
        print(f"Processing: {slug}")
        if process_article(slug):
            modified += 1

    print(f"\nDone. Processed {total} articles, modified {modified}.")


if __name__ == "__main__":
    main()
