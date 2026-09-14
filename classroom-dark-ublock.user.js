// ==UserScript==
// @name         Google Classroom Dark Mode Pro - uBlock Origin
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Ultimate dark mode theme for Google Classroom with cool modern styling - Works with uBlock Origin
// @author       cszdddd
// @match        https://classroom.google.com/*
// @icon         https://www.google.com/favicon.ico
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Create and inject the dark mode stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :root {
            --bg-primary: #0f0f0f;
            --bg-secondary: #1a1a1a;
            --bg-tertiary: #242424;
            --bg-hover: #2d2d2d;
            --text-primary: #e8e8e8;
            --text-secondary: #b0b0b0;
            --accent-blue: #5b9df9;
            --accent-blue-hover: #7aacff;
            --border-color: #333333;
            --shadow: rgba(0, 0, 0, 0.5);
        }

        /* Global Dark Mode */
        * {
            background-color: var(--bg-primary) !important;
            color: var(--text-primary) !important;
            border-color: var(--border-color) !important;
        }

        html, body {
            background: linear-gradient(135deg, var(--bg-primary) 0%, #1a1a2e 100%) !important;
        }

        /* Header & Navigation */
        header, [role="banner"] {
            background: linear-gradient(90deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%) !important;
            box-shadow: 0 2px 12px var(--shadow) !important;
        }

        nav, [role="navigation"] {
            background: var(--bg-secondary) !important;
            border-right: 1px solid var(--border-color) !important;
        }

        /* Sidebar & Cards */
        .Pm6qbe, .khUbqc, [role="complementary"] {
            background: var(--bg-secondary) !important;
        }

        /* Main Content Area */
        .VfPpkd-xl07Ob-XxIAqe, .AHe6kc, [role="main"] {
            background: var(--bg-primary) !important;
        }

        /* Cards & Containers */
        .nSLjCb, .W3tAMb, .xEKkqf, [class*="card"], [class*="material"], div[data-is-preview] {
            background: var(--bg-secondary) !important;
            border: 1px solid var(--border-color) !important;
            border-radius: 12px !important;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
            transition: all 0.3s ease !important;
        }

        .nSLjCb:hover, .W3tAMb:hover, .xEKkqf:hover, [class*="card"]:hover {
            background: var(--bg-tertiary) !important;
            box-shadow: 0 8px 24px rgba(91, 157, 249, 0.15) !important;
            transform: translateY(-2px) !important;
        }

        /* Buttons */
        button, [role="button"], .VfPpkd-LgbsSe, .goog-custom-button {
            background: linear-gradient(135deg, var(--accent-blue) 0%, #4a8fe7 100%) !important;
            color: #ffffff !important;
            border: none !important;
            border-radius: 8px !important;
            font-weight: 600 !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 12px rgba(91, 157, 249, 0.3) !important;
        }

        button:hover, [role="button"]:hover, .VfPpkd-LgbsSe:hover {
            background: linear-gradient(135deg, var(--accent-blue-hover) 0%, #5a9ef7 100%) !important;
            box-shadow: 0 6px 20px rgba(91, 157, 249, 0.4) !important;
            transform: translateY(-1px) !important;
        }

        button:active, [role="button"]:active {
            transform: translateY(0) !important;
        }

        /* Text & Typography */
        .lUpr2b, .AHe6kc, h1, h2, h3, h4, h5, h6, p, span, a, label {
            color: var(--text-primary) !important;
        }

        .lUpr2b, .VfPpkd-St0Bqf {
            color: var(--text-secondary) !important;
        }

        /* Links */
        a, [role="link"] {
            color: var(--accent-blue) !important;
            text-decoration: none !important;
            transition: color 0.2s ease !important;
        }

        a:hover, [role="link"]:hover {
            color: var(--accent-blue-hover) !important;
            text-decoration: underline !important;
        }

        /* Input Fields & Textareas */
        input, textarea, [contenteditable] {
            background: var(--bg-tertiary) !important;
            color: var(--text-primary) !important;
            border: 1px solid var(--border-color) !important;
            border-radius: 8px !important;
            padding: 10px 12px !important;
            transition: all 0.3s ease !important;
        }

        input:focus, textarea:focus, [contenteditable]:focus {
            background: var(--bg-tertiary) !important;
            border-color: var(--accent-blue) !important;
            box-shadow: 0 0 0 3px rgba(91, 157, 249, 0.15) !important;
            outline: none !important;
        }

        /* Dropdown & Select */
        select, [role="listbox"], .goog-custom-button-dropdown {
            background: var(--bg-tertiary) !important;
            color: var(--text-primary) !important;
            border: 1px solid var(--border-color) !important;
            border-radius: 8px !important;
        }

        /* Assignment Cards */
        .W3tAMb, .xEKkqf, [class*="assignment"] {
            background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%) !important;
            border-left: 4px solid var(--accent-blue) !important;
        }

        /* Class Header */
        .AHe6kc, [class*="header"] {
            background: linear-gradient(135deg, var(--bg-secondary) 0%, #2a3a4a 100%) !important;
            padding: 20px !important;
            border-radius: 12px !important;
            margin-bottom: 20px !important;
        }

        /* Stream & Feed */
        .PeKfqe, [role="feed"], [role="article"] {
            background: transparent !important;
        }

        /* Modals & Dialogs */
        [role="dialog"], .goog-custom-button-dialog, .VfPpkd-X1htiub {
            background: var(--bg-secondary) !important;
            border: 1px solid var(--border-color) !important;
            border-radius: 12px !important;
            box-shadow: 0 20px 60px var(--shadow) !important;
        }

        /* Scrollbar Styling */
        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        ::-webkit-scrollbar-track {
            background: var(--bg-primary) !important;
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border-color) !important;
            border-radius: 5px !important;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--text-secondary) !important;
        }

        /* Status Badges */
        [class*="badge"], [class*="status"] {
            background: rgba(91, 157, 249, 0.2) !important;
            color: var(--accent-blue) !important;
            border-radius: 20px !important;
        }

        /* Tables */
        table, thead, tbody, tr, td, th {
            background: var(--bg-secondary) !important;
            border-color: var(--border-color) !important;
        }

        tr:hover {
            background: var(--bg-tertiary) !important;
        }

        /* Code Blocks */
        code, pre, [class*="code"] {
            background: var(--bg-tertiary) !important;
            color: #7dd3fc !important;
            border-radius: 6px !important;
            padding: 2px 6px !important;
        }

        pre {
            padding: 12px !important;
            overflow-x: auto !important;
        }

        /* Placeholders */
        ::placeholder {
            color: var(--text-secondary) !important;
            opacity: 0.7 !important;
        }

        /* Selection */
        ::selection {
            background: rgba(91, 157, 249, 0.3) !important;
            color: var(--text-primary) !important;
        }

        /* Checkboxes & Radio Buttons */
        [type="checkbox"], [type="radio"], input[type="checkbox"], input[type="radio"] {
            accent-color: var(--accent-blue) !important;
        }

        /* Shadows & Depth */
        .shadow, [class*="shadow"], .elevation {
            box-shadow: 0 4px 12px var(--shadow) !important;
        }

        /* Smooth Transitions */
        * {
            transition-property: background-color, color, border-color, box-shadow, transform !important;
            transition-duration: 0.3s !important;
            transition-timing-function: ease !important;
        }

        /* Loading Spinners */
        [class*="spinner"], [class*="loader"] {
            border-color: var(--border-color) !important;
            border-top-color: var(--accent-blue) !important;
        }

        /* Tooltips */
        [role="tooltip"], .goog-tooltip {
            background: var(--bg-tertiary) !important;
            border: 1px solid var(--accent-blue) !important;
            border-radius: 6px !important;
            color: var(--text-primary) !important;
            box-shadow: 0 4px 12px var(--shadow) !important;
        }

        /* Animation for attention */
        @keyframes glow {
            0%, 100% { box-shadow: 0 0 10px rgba(91, 157, 249, 0.3); }
            50% { box-shadow: 0 0 20px rgba(91, 157, 249, 0.6); }
        }

        .attention, [class*="highlight"] {
            animation: glow 2s infinite !important;
        }

        /* Google Material Design 3 overrides */
        .VfPpkd-t08AT-Bz112c-M1sRA {
            background: var(--bg-secondary) !important;
        }

        /* Classroom specific - Class cards */
        .kBzqhe {
            background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%) !important;
            box-shadow: 0 4px 12px rgba(91, 157, 249, 0.1) !important;
        }

        /* Due dates styling */
        .yXK7lf {
            color: #ff6b6b !important;
        }

        /* Section headers */
        .qpAKgf {
            background: var(--bg-tertiary) !important;
            border-bottom: 2px solid var(--accent-blue) !important;
        }

        /* Post comments */
        .sKfxWd {
            background: var(--bg-tertiary) !important;
        }

        /* Submission status */
        .mNJ7Eb {
            background: rgba(91, 157, 249, 0.1) !important;
        }

        /* Menu items */
        .EWp0qd {
            color: var(--text-primary) !important;
        }

        .EWp0qd:hover {
            background: var(--bg-hover) !important;
        }

        /* Additional Google Classroom Elements */
        .bJ7Tcb {
            background: var(--bg-secondary) !important;
        }

        .IgJChf {
            background: var(--bg-tertiary) !important;
            color: var(--text-primary) !important;
        }

        .VfPpkd-zxsF4d-M1sRA {
            background: var(--bg-secondary) !important;
        }

        /* Stream posts */
        .uVccjd {
            background: var(--bg-secondary) !important;
            border: 1px solid var(--border-color) !important;
            border-radius: 8px !important;
        }

        /* Assignments list */
        .Hy1sne {
            background: var(--bg-tertiary) !important;
        }

        /* Course materials */
        .OaV8O {
            background: var(--bg-secondary) !important;
        }
    `;

    // Inject the style as early as possible
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.head.appendChild(style);
        });
    }

    // Log activation message
    console.log('%c🌙 Google Classroom Dark Mode Pro Activated! 🌙', 
        'color: #5b9df9; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(91, 157, 249, 0.5);');
    console.log('%cEnjoy your dark mode experience!', 
        'color: #7aacff; font-size: 12px; font-style: italic;');

    // Optional: Add a toggle function accessible from console
    window.toggleClassroomDarkMode = function() {
        const isDark = document.documentElement.style.colorScheme !== 'light';
        document.documentElement.style.colorScheme = isDark ? 'light' : 'dark';
        console.log('%cDark mode ' + (!isDark ? 'ON ✨' : 'OFF ☀️'), 
            'color: #5b9df9; font-size: 14px; font-weight: bold;');
    };

    // Observer to handle dynamically added elements
    const observer = new MutationObserver(function(mutations) {
        // Dynamically styled elements will inherit from the parent styles
        // No additional action needed as our CSS rules use !important
    });

    // Observe for dynamic content
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false
    });

    // Clean up observer on page unload
    window.addEventListener('beforeunload', function() {
        observer.disconnect();
    });

})();
