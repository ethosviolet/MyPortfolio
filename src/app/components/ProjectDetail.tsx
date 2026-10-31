import { useParams, Link } from 'react-router';
import hubsubLogo from '../../imports/Hubsub_logo_full.webp';
import furwoodCover from '../../imports/furwood_cover_test.png';
import hotSauceImage from '../../imports/hot_sauce_customized.png';
import pomBeforeCart from '../../imports/hubsub_pom_before_cart.png';
import pomBeforeTallRow from '../../imports/hubsub_pom_before_tall_row.png';
import pomAfterVisitTicket from '../../imports/hubsub_pom_after_visit_ticket.png';
import pomRedeemFlash from '../../imports/hubsub_pom_redeem_flash.png';
import pomHistory from '../../imports/hubsub_pom_history.png';
import pomOpenTabs from '../../imports/hubsub_pom_open_tabs.png';
import figmaGiftsDrawer from '../../imports/hubsub_figma_gifts_drawer.webp';
import figmaPreferences from '../../imports/hubsub_figma_preferences.png';
import dsOverview from '../../imports/hubsub_ds_overview.webp';
import dsColors from '../../imports/hubsub_ds_colors.webp';
import dsType from '../../imports/hubsub_ds_type.webp';
import dsButtons from '../../imports/hubsub_ds_buttons.webp';
import dsBadges from '../../imports/hubsub_ds_badges.webp';
import userBeforeAccount from '../../imports/hubsub_user_live_before_account.png';
import userHubGifts from '../../imports/hubsub_user_live_hub_gifts.png';
import userBeforeTheme from '../../imports/hubsub_user_live_before_theme.png';
import userThemeLight from '../../imports/hubsub_user_live_theme_light.png';
import userSettingsDialog from '../../imports/hubsub_user_live_settings_dialog.png';
import userBeforeEvents from '../../imports/hubsub_user_live_before_events.png';
import userEventsCalendar from '../../imports/hubsub_user_live_events_calendar.png';
import userEventsCheckout from '../../imports/hubsub_user_live_events_checkout.png';
import userEventsMobile from '../../imports/hubsub_user_live_events_mobile.png';
import userBeforeMobileSecurity from '../../imports/hubsub_user_live_before_mobile_security.png';
import userAfterMobileSecurity from '../../imports/hubsub_user_live_after_mobile_security.png';
import userBeforeSignon from '../../imports/hubsub_user_live_before_signon.png';
import userAfterSignon from '../../imports/hubsub_user_live_after_signon.png';
import userSignonPending from '../../imports/hubsub_user_live_signon_pending.png';
import userPaletteOptions from '../../imports/hubsub_user_palette_options.png';
import userDsFoundations from '../../imports/hubsub_user_ds_foundations.png';
import userDsNavigation from '../../imports/hubsub_user_ds_navigation.png';
import userDsActions from '../../imports/hubsub_user_ds_actions.png';
import userDsCards from '../../imports/hubsub_user_ds_cards.png';
import userDsFooter from '../../imports/hubsub_user_ds_footer.png';

interface Screen {
  src: string;
  alt: string;
  caption: string;
}

interface BeforeAfter {
  title: string;
  problem: string;
  change: string;
  before: Screen;
  after: Screen;
}

interface DesignSystem {
  title: string;
  intro: string;
  points: string[];
  overview: Screen;
  foundations: Screen[];
  components: Screen[];
  /** Small line under the images. Defaults to the Figma note. */
  note?: string;
}

interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  image: string;
  story: {
    challenge: string;
    approach: string;
    impact: string;
  };
  development: {
    research: string;
    /** Leave out to hide the Wireframes & Concepts section. */
    wireframes?: string;
    iterations: string;
  };
  prototype: {
    description: string;
    features: string[];
    link: string;
  };
  /** Hides the case study behind a coming-soon page until it's written. */
  draft?: boolean;
  /** Optional case-study extras. Only HubSub uses these so far. */
  glance?: { label: string; value: string }[];
  researchKeyInsight?: string;
  researchModelScreen?: Screen & { title: string; text: string };
  researchFindings?: { question: string; answer: string; decision: string }[];
  /** Headings for the findings table. Defaults match the owner interview. */
  researchFindingsLabels?: { title: string; note: string; question: string; answer: string; decision: string };
  iterationsTitle?: string;
  beforeAfter?: BeforeAfter[];
  supportingScreens?: (Screen & { title: string })[];
  /** One section, or several shown one after another. */
  designSystem?: DesignSystem | DesignSystem[];
  testing?: {
    title: string;
    status: string;
    description: string;
    questions: string[];
    method: string[];
  };
  prototypeTitle?: string;
  prototypeLinkLabel?: string;
  learned?: string[];
  roadmap?: string[];
  roadmapIntro?: string;
  /** Show the hero image whole on a card background instead of cropping it. */
  heroContain?: boolean;
}

const defaultFindingsLabels = {
  title: 'From interview to decision',
  note: 'Answers are paraphrased from my interview notes.',
  question: 'I asked',
  answer: 'The owner said',
  decision: 'What we did'
};

const projectsData: Record<string, ProjectData> = {
  Hubsub: {
    id: 1,
    title: 'HubSub: Redesigning the Counter Experience for a Membership Platform',
    description:
      'As the sole UX designer, I redesigned the bar-side tools that staff use to serve members, from stakeholder interview to production front-end code.',
    tags: ['Product Design', 'UX Research', 'Figma', 'Front-End Development'],
    color: 'from-brand-light to-brand',
    image: hubsubLogo,
    heroContain: true,
    glance: [
      { label: 'Role', value: 'Sole UX / Product Designer' },
      { label: 'Team', value: 'Me + Lead Software Developer' },
      { label: 'Status', value: 'Live at 2 Seattle businesses' },
      { label: 'Tools', value: 'Figma, Figma Agent, Cursor, Git, React' }
    ],
    story: {
      challenge:
        'HubSub runs membership programs for local businesses, where members redeem perks like pours and merch in person. The program worked, but the Point of Membership (POM) screen bartenders used to redeem perks felt confusing and incomplete.',
      approach:
        'As HubSub’s only designer, I work directly with our lead developer. I interviewed our longest-running partner, turned his feedback into a plan, designed the fixes in Figma, and shipped them as front-end code with Cursor.',
      impact:
        'Four production releases in August 2026 overhauled the counter: one-tap redemption, a live visit ticket with undo on every line, and a consistent, color-coded tile grid. It’s live at both businesses using HubSub.'
    },
    development: {
      research:
        'Before a key release, I interviewed the owner of a Seattle cidery that has used HubSub for years, with targeted questions about the decisions blocking launch. His verdict: the counter felt confusing, and speed mattered most.',
      iterations:
        'The interview led to a complete overhaul of how the counter looks and works, not surface tweaks. Each change below traces back to something the owner told us. One example: he was adamant that a separate check-in step before each pour had to go. Now a member waiting at check-in is confirmed by their first pour, so staff skip the extra step.',
    },
    researchKeyInsight:
      'The owner’s framing: think of a member’s visit like an open check at a restaurant. Items go on the tab as they’re served, any line can be voided, and everything is finalized when the check closes.',
    researchModelScreen: {
      title: 'The open-check model, built',
      text:
        'That framing became the counter’s home screen. Members who just arrived wait for a one-tap Confirm, and everyone already checked in sits on an Open Tabs list with their club, perks used, and time since check-in. Staff can jump into any tab or close it out from here.',
      src: pomOpenTabs,
      alt: 'POM home screen with a Just arrived list showing one member to confirm, and an Open Tabs list of three checked-in members with club, perk count, check-in time, and Close Out buttons',
      caption: 'Open Tabs home screen with test members (recreated from the current product layout)'
    },
    researchFindings: [
      {
        question: 'If staff accidentally redeem a full cart, how does that affect the business?',
        answer:
          'Very negatively, for the customer and the business. It confuses everyone about which redemptions were real. Staff need a way to undo and to track what happened.',
        decision: 'Per-row undo on every redemption, plus a full history with batch undo'
      },
      {
        question: 'Is speed or mis-tap protection more important at the counter?',
        answer: 'Speed. An undo system beats a confirmation dialog.',
        decision: 'No confirmation pop-up. Accept the mis-tap risk and make recovery easy instead'
      },
      {
        question: 'How often do staff stage more than one perk before redeeming?',
        answer: 'Usually one at a time. Multiple perks mostly happen when a new member picks up welcome gifts.',
        decision: 'Removed the staging cart. A tap redeems immediately onto a single “This visit” ticket'
      },
      {
        question: 'If staff hand out a gift before the member finishes its survey, is the gift still open?',
        answer:
          'No. It’s closed the moment it’s redeemed, but the member still needs to see what they picked, and staff need a way to edit it.',
        decision: 'A gift closes when it’s redeemed and stops triggering survey reminders. Members can update their customization themselves, and staff see the latest request on the perk card'
      },
      {
        question: 'Open feedback: what would make the counter screens better?',
        answer:
          'The extra check-in step, and features nobody uses. The Macro Pour is the most-redeemed perk, and a select-all button isn’t needed.',
        decision: 'The first pour confirms a pending check-in, and the grid dropped select-all'
      }
    ],
    iterationsTitle: 'Stakeholder Feedback & Iteration',
    beforeAfter: [
      {
        title: 'From a staging cart to a live visit ticket',
        problem:
          'Taps staged quantities in a Cart. Nothing was redeemed until staff pressed a separate button, and a mis-tap could only be cleared by removing the whole line.',
        change:
          'Each tap now redeems right away onto a “This visit” ticket. Every row has a timestamp and its own undo, and Close out ends the visit.',
        before: {
          src: pomBeforeCart,
          alt: 'Old POM screen: perk tiles above a Cart panel showing Macro Pour times 3 and a Redeem 3 perks button',
          caption: 'Before: the staging Cart (rebuilt from the earlier code for comparison)'
        },
        after: {
          src: pomAfterVisitTicket,
          alt: 'New POM screen: color-coded perk tiles with a This visit ticket listing three timestamped Macro Pours, each with an undo button',
          caption: 'After: tap-to-redeem with a live visit ticket (live production build)'
        }
      },
      {
        title: 'One consistent grid of tiles',
        problem:
          'Visit pours were pinned to a taller first row, ahead of staff display settings. Gift tiles below were shorter, so taps on different rows didn’t hit the same size target.',
        change:
          'Every perk is one tile size. Order follows staff settings (unlimited, then refreshes, then gifts by default), and colors with a legend show each perk type at a glance.',
        before: {
          src: pomBeforeTallRow,
          alt: 'Old POM tile layout with a tall first row of pour tiles above shorter gift tiles',
          caption: 'Before: tall visit-pour row above shorter gift tiles (rebuilt from the earlier code)'
        },
        after: {
          src: pomAfterVisitTicket,
          alt: 'New uniform grid: equal-size tiles colored teal for unlimited, orange for refreshes, and blue for one-time gifts, with a legend',
          caption: 'After: uniform, color-coded grid with a legend (live production build)'
        }
      }
    ],
    supportingScreens: [
      {
        title: 'Clear confirmation, easy recovery',
        src: pomRedeemFlash,
        alt: 'POM screen with a “1 perk redeemed” confirmation offering Undo and History buttons',
        caption: 'A redemption confirmation stays on screen until dismissed and offers Undo and History, not just a disappearing toast.'
      },
      {
        title: 'Fixing mistakes after the fact',
        src: pomHistory,
        alt: 'Fulfillment history sheet listing past Macro Pour redemptions with checkboxes and a Batch undo button',
        caption: 'View all time opens the member’s full history, where staff can select and batch-undo past redemptions.'
      },
      {
        title: 'Gifts sorted by what happens next',
        src: figmaGiftsDrawer,
        alt: 'Gifts and perks drawer with cards grouped into Needs customization, Ready to order, and Already fulfilled, each showing status and perks left to redeem',
        caption: 'Figma design: gifts are grouped into needs customization, ready to order, and already fulfilled. Once a gift is redeemed it closes out instead of triggering more survey reminders.'
      },
      {
        title: 'Staff control over the grid',
        src: figmaPreferences,
        alt: 'Preferences modal with toggles for Member insights, Show tile colors, and Group by type, and a choice of Smart, Custom, or Default tile order',
        caption: 'Figma design: staff pick smart, custom, or default tile order and can turn tile colors off, so the grid fits how each business works.'
      }
    ],
    designSystem: {
      title: 'Design System',
      intro:
        'With one developer, two businesses, and screens changing every week, I needed a way to stay consistent without redesigning from scratch. I built a design system in Figma for the counter: color, type, buttons, status badges, and the components staff use during a shift.',
      points: [
        'Same values in design and code. The Figma color styles match the app’s theme (orange #ffa101 is the primary action in both), and type is Inter on the same size scale.',
        'Color carries meaning. Orange is the main action, red closes or undoes, and each perk type gets its own tile color with a legend, so staff can read the grid at a glance.',
        'Built once, reused everywhere. New screens like Preferences and the gifts drawer were assembled from existing tabs, toggles, tiles, and buttons.'
      ],
      overview: {
        src: dsOverview,
        alt: 'POM design system components assembled: member header, navigation tabs, color-coded perk tiles with a legend, the gifts and perks table, the This visit ticket, and the Preferences modal',
        caption: 'The system put together: member header, tabs, color-coded perk tiles, the gifts table, the This visit ticket, and Preferences.'
      },
      foundations: [
        {
          src: dsColors,
          alt: 'Color palette with named tokens for backgrounds, text, accent, brand, borders, and semantic colors, each with its hex value',
          caption: 'Color tokens named by role: background, text, accent, brand, border, and semantic.'
        },
        {
          src: dsType,
          alt: 'Typography scale in Inter from Heading 1 at 32px down to Caption and Overline at 11px',
          caption: 'Type scale: Inter, from 32px headings down to 11px captions.'
        }
      ],
      components: [
        {
          src: dsButtons,
          alt: 'Button variants: orange Primary Action, Secondary, red Destructive, Ghost, Outline, and Muted',
          caption: 'Button variants, from the orange primary action to red destructive.'
        },
        {
          src: dsBadges,
          alt: 'Status badges for Active, Cancelled, Pending, Info, and Warning, plus an orange count badge',
          caption: 'Status badges for memberships and gifts, plus the orange count badge used on tabs and tiles.'
        }
      ]
    },
    testing: {
      title: 'Follow-Up Interview',
      status: 'Scheduled: October 28, 2026',
      description:
        'Two months after launch, I’m sitting down with the owner for an in-depth follow-up on how the update actually landed. We’ll go through each live change: where it helped, where it didn’t, and what’s still unfinished for his team and for members. Findings and the next round of changes will be added here.',
      questions: [
        'How has running the membership program felt since the update went live, and where is a busy night different?',
        'For each of the six live changes, did it help the work, and where does it still fall short?',
        'How intuitive were the new screens for bartenders, and what did they trip on in their first live shifts?',
        'What business-side work still happens outside the app?',
        'What do members still run into that this update didn’t change?'
      ],
      method: [
        'A 45–60 minute semi-structured interview with the owner',
        'One section per live change, asking for a recent real example of each',
        'The owner’s view of how staff adapted, and how they’d like the next rollout handled',
        'An optional walkthrough on a test member if an answer stays vague'
      ]
    },
    prototypeTitle: 'The Product',
    prototype: {
      description:
        'The redesigned counter is live in production at two Seattle businesses. The Figma file below shows the Point of Membership design that staff use at the bar. Alongside it, I keep designing the member-facing app with the developer.',
      features: [
        'One-tap perk redemption, with undo that still works after the visit closes',
        'Live “This visit” ticket with a timestamp and undo on every row',
        'A member’s first pour confirms their check-in, so staff skip a step',
        'Uniform, color-coded perk grid that follows staff display settings',
        'Full redemption history with batch undo',
        'Designed in Figma and shipped as production front-end code'
      ],
      link: 'https://www.figma.com/design/Q9wIN7YbQ2XGw2mZZFOyHx/HubSub-SF--Business-?node-id=732-2343&t=ISh1DJE5TuSRWe9A-0'
    },
    prototypeLinkLabel: 'Open Point of Membership Prototype',
    learned: [
      'Designing for staff during a busy shift is different from designing for customers. Speed, big targets, and easy recovery from mistakes matter more than anything else.',
      'Shipping my own front-end code taught me to design within real technical constraints and to sweat the details in the build, not just the mockup.',
      'One honest conversation with a stakeholder reshaped the roadmap. Next, I want to learn how those changes play out in real shifts, and hear from members directly.'
    ],
    roadmap: [
      'Redemption history for members, so they can see the value they get from their membership',
      'A matching check-in code shown on both the member’s phone and the counter screen, for quick verification without slowing staff down',
      'Survey reminders for members when they check in, and the ability to fix a name, size, or typo before a gift ships',
      'Point-of-sale integration (such as Square) to make HubSub easier for new businesses to adopt'
    ]
  },
  'hubsub-member-account': {
    id: 4,
    title: 'HubSub: Designing the Member Account Hub',
    description:
      'As the sole UX designer, I’m redesigning the member side of HubSub. The first piece, a clearer Sign-in & Security flow, is live. A tabbed hub, a light and dark theme, Events, and a mobile layout are on the way.',
    tags: ['Product Design', 'Theming', 'Responsive Design', 'Front-End Development'],
    color: 'from-brand to-brand-light',
    image: userAfterSignon,
    heroContain: true,
    glance: [
      { label: 'Role', value: 'Sole UX / Product Designer' },
      { label: 'Team', value: 'Me + Lead Software Developer' },
      { label: 'Status', value: 'Sign-in & Security live, more in progress' },
      { label: 'Tools', value: 'Figma, Cursor, React, Tailwind, Playwright' }
    ],
    story: {
      challenge:
        'The first problem I took on was sign-in. Members of HubSub businesses use their account to track gifts and surveys, hold gift cards, and find events, and none of that works if they can’t sign in. The old sign-in panel didn’t explain what happened when you changed an email or added a backup. Beyond sign-in, the account pages had grown piece by piece: the structure was unclear, the look was borrowed from the always-dark staff app, and the layout only really worked on desktop.',
      approach:
        'I started with Sign-in & Security because it blocks everything else, and shipped it first. From there I designed every account screen in Figma, in dark and light, at desktop and 585px mobile, and I’m building the rest with Cursor alongside our lead developer.',
      impact:
        'Sign-in & Security is live for members: a roster of sign-on methods with primary and recovery emails, Google, Apple, and Discord, and one clear message after every action. The rest is in progress: a tabbed account hub, a light and dark theme for member pages only, a new Events tab with a calendar, filters, and ticket checkout, and a mobile layout. The Events work already has 10 automated browser tests.'
    },
    development: {
      research:
        'This round started from an audit of the existing account pages in preprod and the problems they caused, not a member interview. I mapped every account screen into Figma, then explored the redesign there: each section in dark and light, desktop and mobile, plus three neutral palettes for the theme. Hearing from members directly is the next step (see below).',
      iterations:
        'Sign-in & Security came first, and it’s live. The rest of the account is moving through a second pass: one tab bar on every section, a light and dark theme, Events, and a real mobile layout. Each pair below puts the real code from before a change next to the code after it, captured with a fictional test member.'
    },
    researchKeyInsight:
      'The member side has a different job than the counter. Staff need speed during a shift. Members need to understand what’s going on with their email, their gifts, and their next event without asking anyone at the bar.',
    researchFindingsLabels: {
      title: 'From audit to decision',
      note: 'Problems I found in the existing account pages, and how each one shaped the redesign.',
      question: 'What I found',
      answer: 'Why it mattered',
      decision: 'What we did'
    },
    researchFindings: [
      {
        question:
          'The sign-in panel showed idle “we sent a link” copy and cooldown warnings, and a Connect Discord button appeared even where Discord wasn’t set up.',
        answer: 'A member who can’t sign in can’t see their perks or gifts, and a dead button erodes trust in the rest of the page.',
        decision:
          'Shipped: a roster of sign-on methods with Primary, Recovery, and Verified badges, one “Check your email” message right where you acted, and providers shown only when they work.'
      },
      {
        question:
          'Everything lived on one long account page: profile, membership card, sign-in, notifications, gift codes, gift surveys, and events, stacked in a single scroll.',
        answer: 'Members had to scroll past everything else to find the one setting they came for.',
        decision:
          'Split the account into My Profile, Sign-in & Security, Gifts & Surveys, and Wallet, each with its own URL. Old links still land on the right section.'
      },
      {
        question: 'Member pages inherited the staff app’s always-dark look.',
        answer: 'Staff work in a dim bar. Members open their account on their own phone, anywhere.',
        decision:
          'A light and dark theme scoped to member pages only. Staff screens stay dark, and each member’s choice is remembered.'
      },
      {
        question: 'Events was a small card at the bottom of the account page that only showed tickets a member already had.',
        answer: 'Members had no single place to see what’s coming up at a business or buy a ticket.',
        decision:
          'A new Events tab with calendar and list views, filters for free, members-only, and ticketed events, add to calendar, and checkout through HubSub’s existing Stripe flow.'
      },
      {
        question: 'On a phone, each section was its own page behind a Back to account link, with the content in a card inside the page.',
        answer: 'Nested cards waste width on a narrow screen and push content below the fold.',
        decision:
          'Mobile designs at 585px: a flat tab bar, edge-to-edge section cards, stacked event rows, and a single-column checkout.'
      }
    ],
    iterationsTitle: 'Sign-in First, Then the Rest',
    beforeAfter: [
      {
        title: 'Live: sign-in that explains itself',
        problem:
          'The old Account recovery page warned “Verify your email” even when the email was already verified. Choosing between a new primary and a backup address was hidden behind a checkbox, and sign-in options were split across two lists: “Other ways to sign in” and “Linked login methods.”',
        change:
          'One sign-on roster shows every address with Primary, Recovery, and Verified badges. Two clear buttons, Use as recovery and Make primary, replace the checkbox. Google and Discord sit in a single Connected accounts list, and the verification warning only appears when something actually needs confirming.',
        before: {
          src: userBeforeSignon,
          alt: 'Old Account recovery page for a verified Google member, showing a Verify your email warning, an email field with a make-primary checkbox, Continue with Google and passkey buttons, and a separate Linked login methods list',
          caption: 'Before: the old Account recovery page (real code from before the change, test member)'
        },
        after: {
          src: userAfterSignon,
          alt: 'Sign-in & Security tab with one verified primary email via Google, Use as recovery and Make primary buttons, Google and Discord under Connected accounts, and a Passkeys section',
          caption: 'After: Sign-in & Security for the same test member (real code, mocked data)'
        }
      },
      {
        title: 'In progress: from one long page to a tabbed hub',
        problem:
          'The account was one long page. Profile, membership card, sign-in methods, notification settings, gift codes, gift surveys, and events were stacked in a single scroll, so finding one setting meant scrolling past all the others.',
        change:
          'One tab bar sits under My account on every section, on desktop and mobile. Each section gets the full page, so Gifts & Surveys shows how many gifts need action and gives every gift its own Finish survey button.',
        before: {
          src: userBeforeAccount,
          alt: 'Old My account page as one long column: pending surveys banner, profile and membership card, profile form, sign-in methods, notification link, gift codes, gift perks and surveys, and an Events card',
          caption: 'Before: the whole account on one page (real code from before the change, test member)'
        },
        after: {
          src: userHubGifts,
          alt: 'Account hub with five tabs and the Gifts & Surveys tab open, showing a pending surveys banner and three gifts, two with Finish survey buttons',
          caption: 'After: Gifts & Surveys under the shared tab bar (real code, mocked data)'
        }
      },
      {
        title: 'In progress: from a ticket card to an Events tab',
        problem:
          'Events was a small card at the bottom of the account page. It only listed tickets a member already had, so there was no way to see what else was coming up or buy a ticket.',
        change:
          'A full Events tab with calendar and list views, filters for free, members-only, and ticketed events, and the selected event’s details with Buy tickets right under the month.',
        before: {
          src: userBeforeEvents,
          alt: 'Old Events card titled Tickets and upcoming visits, showing one upcoming event, Harvest Dinner, with Admit 2',
          caption: 'Before: the Events card on the old account page (real code, sample event)'
        },
        after: {
          src: userEventsCalendar,
          alt: 'Events tab in calendar view for October 2026 with filter chips and three sample events, the ticketed Harvest Dinner selected with a Buy tickets button below',
          caption: 'After: the Events tab, calendar view (real code, sample events)'
        }
      },
      {
        title: 'In progress: a phone layout that keeps you oriented',
        problem:
          'On a phone, each section was its own page behind a Back to account link, with the content in a card inside the page. To move between sections, you had to go back to the start.',
        change:
          'A flat tab bar stays at the top of every section, so any other section is one tap away. Cards run edge to edge, giving the content the full width of the screen.',
        before: {
          src: userBeforeMobileSecurity,
          alt: 'Old mobile Sign-in & Security page with a Back to account link and the sign-on details inside a rounded card',
          caption: 'Before: Sign-in & Security on a phone (real code, test member)'
        },
        after: {
          src: userAfterMobileSecurity,
          alt: 'New mobile Sign-in & Security with a five-tab bar at the top and edge-to-edge sign-on sections',
          caption: 'After: the same page with the tab bar and edge-to-edge layout (real code, mocked data)'
        }
      }
    ],
    supportingScreens: [
      {
        title: 'Live: one clear message after every action',
        src: userSignonPending,
        alt: 'Sign-in & Security after adding a recovery address: a new Recovery row marked Unverified with Cancel request and Request a new link buttons, and a green Check your email message',
        caption:
          'After pressing Use as recovery, the new address appears as its own Unverified row with Cancel request, and one green message explains what happens next.'
      },
      {
        title: 'In progress: ticket checkout without new payment code',
        src: userEventsCheckout,
        alt: 'Event checkout for the sample Harvest Dinner with an order summary and Pay $45.00 button on the left, and ticket type and quantity on the right',
        caption:
          'Ticketed events open an order summary, and paying hands off to the Stripe checkout HubSub already uses. Free and members-only events get Add to calendar instead.'
      },
      {
        title: 'In progress: Events on the phone',
        src: userEventsMobile,
        alt: 'Mobile Events tab in calendar view with filter chips and the selected Harvest Dinner stacked below the month with a Buy tickets button',
        caption: 'The same calendar on a phone, with the selected event stacked under the month.'
      }
    ],
    designSystem: [
      {
        title: 'Design System',
        intro:
          'To keep every account screen consistent across two themes and two screen sizes, I documented a design system for the member hub in Figma: color roles, type, spacing, radii, and the patterns each section is built from. Shared main components drive the header, tabs, and footer across all ten account reference frames.',
        points: [
          'Eight core tokens. Canvas, surface, raised, border, text, muted, brand, and active. Amber is saved for active states and primary actions.',
          'One typeface, one exception. Inter carries the interface on a six-step scale. Menlo is kept for identity strings like email addresses.',
          'Edit once, update everywhere. Linked main components for the navbar, tabs, header, and footer update every account frame when I change them.'
        ],
        overview: {
          src: userDsFoundations,
          alt: 'Foundations page: eight color roles with hex values, a type scale from Display 40 to Label 11, a 4px spacing scale, radii, and border and elevation styles',
          caption: 'Foundations: color roles, type scale, spacing, radii, and borders.'
        },
        foundations: [
          {
            src: userDsNavigation,
            alt: 'Header, title and tabs patterns: the red brand header on desktop and mobile, the My account title with five tabs on desktop and mobile, and passive, active, and focus tab states',
            caption: 'Header, title, and tabs on desktop and mobile, with passive, active, and keyboard focus states.'
          },
          {
            src: userDsActions,
            alt: 'Button hierarchy with amber primary, grey secondary, and red destructive buttons, plus status badges for Active, Pending, Cancelled, Primary, Recovery, and Unverified',
            caption: 'Buttons and status badges: amber for the next step, grey for secondary actions, red for destructive ones.'
          }
        ],
        components: [
          {
            src: userDsCards,
            alt: 'Gift perks and surveys, wallet balance, gift codes, and event panels in the dark theme',
            caption: 'Gift, survey, wallet, and event panels, including their empty states.'
          },
          {
            src: userDsFooter,
            alt: 'Footer and newsletter pattern compared on desktop and mobile',
            caption: 'The footer on desktop and mobile, kept muted to separate account tasks from site content.'
          }
        ]
      },
      {
      title: 'Light & Dark Theme',
      intro:
        'In progress. The member pages had inherited the staff app’s always-dark look. I explored three Tailwind neutral palettes in Figma, each with four tokens for light and dark, and chose Zinc: true neutral grays with almost no color cast. Brand and action colors stay fixed, so only the foundation changes.',
      points: [
        'Four tokens, two themes. Canvas, surface, raised, and border swap between light and dark. Text, brand, and action colors stay the same.',
        'Scoped to members. The theme only applies to account pages. The staff counter and admin screens stay dark.',
        'Picked once, remembered. Members switch light or dark from the settings gear on any section, and the choice sticks on that device.'
      ],
      overview: {
        src: userPaletteOptions,
        alt: 'Figma frame comparing three neutral palettes, Slate, Zinc, and Gray, each with canvas, surface, raised, and border swatches for light and dark themes',
        caption: 'Three neutral palettes compared for canvas, surface, raised, and border. Zinc (Option B) is the one I chose.'
      },
      foundations: [
        {
          src: userHubGifts,
          alt: 'Gifts & Surveys tab in the dark theme',
          caption: 'Gifts & Surveys in the dark theme, the default.'
        },
        {
          src: userThemeLight,
          alt: 'Gifts & Surveys tab in the light theme',
          caption: 'The same page after switching to light. Only the neutrals change, and the orange actions stay put.'
        }
      ],
      components: [
        {
          src: userBeforeTheme,
          alt: 'Earlier Gifts & Surveys page with a left section menu, always dark, with no theme setting',
          caption: 'Before: the same page was always dark, with no way to change it (real code from before the change).'
        },
        {
          src: userSettingsDialog,
          alt: 'Settings dialog centered over a blurred account page, with a Theme switch showing moon and sun icons and a Notifications row',
          caption: 'After: the settings gear opens a dialog with the Light/Dark switch and a link to notifications.'
        }
      ],
      note: 'The palette comparison is from my Figma file. The other images are screenshots of the real code. Click any image to view it full size.'
      }
    ],
    testing: {
      title: 'Hearing From Members',
      status: 'Next step',
      description:
        'So far, member-side decisions came from the page audit and from what business owners pass along. The next round is about members themselves: what they still run into, and what they wish they could see or fix on their own.',
      questions: [
        'What do members still run into that this update didn’t change?',
        'What should they be able to see or fix that they still can’t?',
        'What do they ask staff that the app should answer?',
        'What on the member side is fine and should stay as it is?'
      ],
      method: []
    },
    prototypeTitle: 'The Product',
    prototype: {
      description:
        'Sign-in & Security is live for members, and more changes are on the way. The Figma file below shows the member account in both themes, on desktop and mobile.',
      features: [
        'Live: sign-on roster with primary and recovery emails, Google, Apple, and Discord',
        'In progress: tabbed account hub with its own URL for each section',
        'In progress: light and dark theme for member pages, chosen from a settings gear',
        'In progress: Events tab with calendar, list, filters, add to calendar, and ticket checkout',
        'In progress: mobile layout with flat tabs and edge-to-edge cards',
        'Designed in Figma and built as front-end code, with automated browser tests'
      ],
      link: 'https://www.figma.com/design/Q9wIN7YbQ2XGw2mZZFOyHx/HubSub-SF--Business-?node-id=681-2370'
    },
    prototypeLinkLabel: 'Open Member Account Designs',
    roadmapIntro: 'Member-side ideas from my owner interviews that this work didn’t cover yet:',
    roadmap: [
      'A history of everything a member has redeemed, so they can see what their membership is worth',
      'Seeing the current visit on their own phone while they’re at the bar',
      'A nudge when a gift survey is still unfinished',
      'Editing a gift’s customization, like a name or size, until it ships'
    ],
    learned: [
      'Designing for members is a different job than designing for staff. At the counter, speed wins. On the member side, clarity wins, because nobody is standing next to them to explain.',
      'Shipping sign-in on its own first got the most important fix to members early, while the bigger account redesign keeps moving.',
      'Account screens need every state spelled out. Most of the sign-on work was deciding what to show when an email is pending, unverified, or cancelled.'
    ]
  },
  'furwood-campout': {
    id: 2,
    draft: true,
    title: 'Launch a Community Camping Event Website',
    description:
      'End-to-end website design for a community camping event, making registration, schedules, and campsite information easy to access on any device.',
    tags: ['Event UX', 'Information Architecture', 'Figma'],
    color: 'from-violet-400 to-brand',
    image: furwoodCover,
    story: {
      challenge:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      impact:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    development: {
      research:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      wireframes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iterations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
    },
    prototype: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident.'
      ],
      link: '#'
    }
  },
  'custom-caliente': {
    id: 3,
    draft: true,
    title: 'Designing an Interactive E-Commerce Platform for Hot Sauce Sales',
    description: 'Interactive e-commerce experience for discovering, comparing, and purchasing craft hot sauces with confidence.',
    tags: ['E-commerce UX', 'Figma', 'Conversion Design'],
    color: 'from-brand to-brand-deep',
    image: hotSauceImage,
    story: {
      challenge:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      impact:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    development: {
      research:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      wireframes:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iterations:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
    },
    prototype: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      features: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        'Duis aute irure dolor in reprehenderit in voluptate velit.',
        'Excepteur sint occaecat cupidatat non proident.'
      ],
      link:
        'https://www.figma.com/proto/n0afnUokY6boq5y7giF6d6/Custom-Caliente-Wireframes--Mockups?node-id=232-19&t=dZtYkok3wvROlGDR-1'
    }
  }
};

function ScreenFigure({ screen, tone }: { screen: Screen; tone?: 'before' | 'after' }) {
  return (
    <figure className="flex flex-col gap-2">
      {tone ? (
        <span
          className={`self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            tone === 'after' ? 'bg-brand text-black' : 'bg-muted text-foreground'
          }`}
        >
          {tone === 'after' ? 'After' : 'Before'}
        </span>
      ) : null}
      <a
        href={screen.src}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-lg border border-border bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label={`Open full size: ${screen.alt}`}
      >
        <img src={screen.src} alt={screen.alt} className="w-full h-64 sm:h-72 object-contain" loading="lazy" />
      </a>
      <figcaption className="text-sm text-foreground">{screen.caption}</figcaption>
    </figure>
  );
}

/** Design system frames keep their own proportions instead of the fixed-height screen box. */
function SystemFigure({ screen }: { screen: Screen }) {
  return (
    <figure className="flex flex-col gap-2">
      <a
        href={screen.src}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-lg border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        aria-label={`Open full size: ${screen.alt}`}
      >
        <img src={screen.src} alt={screen.alt} className="w-full h-auto" loading="lazy" />
      </a>
      <figcaption className="text-sm text-foreground">{screen.caption}</figcaption>
    </figure>
  );
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;
  /** Hubsub logo: full mark on white. Custom Caliente: text must stay visible; red frame fills the card. */
  const isHubsubHero = Boolean(project?.heroContain);
  const findingsLabels = project?.researchFindingsLabels ?? defaultFindingsLabels;
  const designSystems = project?.designSystem ? ([] as DesignSystem[]).concat(project.designSystem) : [];
  const hasPrototypeLink = project?.prototype.link && project.prototype.link !== '#';
  const figmaEmbedUrl =
    hasPrototypeLink && project?.prototype.link.includes('figma.com')
      ? `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.prototype.link)}`
      : null;

  if (project?.draft) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">{project.title}</h1>
        <p className="text-foreground/90 mb-6">This case study is coming soon.</p>
        <Link to="/projects" className="text-brand hover:text-brand-hover">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-foreground mb-4">Project not found</h1>
        <Link to="/projects" className="text-brand hover:text-brand-hover">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/projects" className="text-brand hover:text-brand-hover mb-6 inline-block">
        ← Back to Projects
      </Link>

      {/* Hero Section */}
      <div className="mb-12">
        <div className={`h-2 bg-gradient-to-r ${project.color} rounded-full mb-6`} />
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          {project.title}
        </h1>
        <p className="text-xl text-foreground/90 mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-card text-muted-foreground rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.glance ? (
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {project.glance.map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">{item.label}</dt>
                <dd className="text-sm font-medium text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {projectId === 'custom-caliente' ? (
          <div
            className={`overflow-hidden rounded-xl shadow-lg ring-1 ring-white/[0.1] bg-gradient-to-r ${project.color}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="mx-auto block w-full max-h-[min(68vh,48rem)] object-contain p-1.5 sm:p-2.5"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className={
              isHubsubHero
                ? 'w-full max-h-[min(70vh,52rem)] object-contain rounded-xl shadow-lg bg-card p-6 sm:p-10 mx-auto'
                : 'w-full h-96 object-cover rounded-xl shadow-lg'
            }
          />
        )}
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">The Story</h2>
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">The Challenge</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.challenge}</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">My Approach</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.approach}</p>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-3">The Impact</h3>
            <p className="text-muted-foreground leading-relaxed">{project.story.impact}</p>
          </div>
        </div>
      </section>

      {/* Design Development Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Design Development</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Research & Discovery</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{project.development.research}</p>
            {project.researchKeyInsight ? (
              <blockquote className="mb-6 rounded-xl border-l-4 border-brand bg-card p-6">
                <span className="block text-xs font-semibold uppercase tracking-wide text-brand mb-2">Key insight</span>
                <p className="text-lg text-foreground leading-relaxed">{project.researchKeyInsight}</p>
              </blockquote>
            ) : null}
            {project.researchModelScreen ? (
              <div className="mb-6 bg-card border border-border rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">{project.researchModelScreen.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-4">{project.researchModelScreen.text}</p>
                <ScreenFigure screen={project.researchModelScreen} />
              </div>
            ) : null}
            {project.researchFindings ? (
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-1">{findingsLabels.title}</h4>
                <p className="text-sm text-muted-foreground mb-6">{findingsLabels.note}</p>
                <ol className="space-y-6">
                  {project.researchFindings.map((finding, index) => (
                    <li key={index} className="grid gap-3 md:grid-cols-3 border-t border-border pt-6 first:border-t-0 first:pt-0">
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                          {findingsLabels.question}
                        </span>
                        <p className="text-foreground">{finding.question}</p>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                          {findingsLabels.answer}
                        </span>
                        <p className="text-muted-foreground">{finding.answer}</p>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wide text-brand mb-1">
                          {findingsLabels.decision}
                        </span>
                        <p className="text-foreground">{finding.decision}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Research artifacts and user insights</span>
              </div>
            )}
          </div>
          {project.development.wireframes ? (
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Wireframes & Concepts</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">{project.development.wireframes}</p>
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Wireframe sketches and concepts</span>
              </div>
            </div>
          ) : null}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              {project.iterationsTitle ?? 'Testing & Iteration'}
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{project.development.iterations}</p>
            {project.beforeAfter ? (
              <div className="space-y-8">
                {project.beforeAfter.map((pair) => (
                  <div key={pair.title} className="bg-card border border-border rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">{pair.title}</h4>
                    <div className="grid gap-4 sm:grid-cols-2 mb-6">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="block font-semibold text-foreground mb-1">The problem</span>
                        {pair.problem}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="block font-semibold text-foreground mb-1">The change</span>
                        {pair.change}
                      </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <ScreenFigure screen={pair.before} tone="before" />
                      <ScreenFigure screen={pair.after} tone="after" />
                    </div>
                  </div>
                ))}
                {project.supportingScreens ? (
                  <div className="grid gap-6 md:grid-cols-2">
                    {project.supportingScreens.map((screen) => (
                      <div key={screen.title} className="bg-card border border-border rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">{screen.title}</h4>
                        <ScreenFigure screen={screen} />
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="text-xs text-foreground">Click any screen to view it full size.</p>
              </div>
            ) : (
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Iteration progression and testing results</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {designSystems.map((system) => (
        <section key={system.title} className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">{system.title}</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">{system.intro}</p>
          <ul className="grid gap-4 md:grid-cols-3 mb-8">
            {system.points.map((point) => {
              const [lead, ...rest] = point.split('. ');
              return (
                <li key={point} className="bg-card border border-border rounded-xl p-5 text-sm leading-relaxed">
                  <span className="block font-semibold text-foreground mb-1">{lead}.</span>
                  <span className="text-muted-foreground">{rest.join('. ')}</span>
                </li>
              );
            })}
          </ul>
          <div className="space-y-6">
            <SystemFigure screen={system.overview} />
            <div className="grid gap-6 md:grid-cols-2 items-start">
              {system.foundations.map((screen) => (
                <SystemFigure key={screen.caption} screen={screen} />
              ))}
            </div>
            {system.components.length ? (
              <div className="grid gap-6 md:grid-cols-2 items-start">
                {system.components.map((screen) => (
                  <SystemFigure key={screen.caption} screen={screen} />
                ))}
              </div>
            ) : null}
            <p className="text-xs text-foreground">
              {system.note ?? 'Frames from my Figma file. Click any image to view it full size.'}
            </p>
          </div>
        </section>
      ))}

      {project.testing ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">{project.testing.title}</h2>
          <div className="bg-card border border-dashed border-brand/50 rounded-xl p-6 sm:p-8">
            <span className="inline-block rounded-full bg-brand/20 px-3 py-1 text-xs font-semibold text-brand mb-4">
              {project.testing.status}
            </span>
            <p className="text-muted-foreground leading-relaxed mb-6">{project.testing.description}</p>
            <div className={project.testing.method.length ? 'grid gap-8 md:grid-cols-2' : ''}>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Research questions</h3>
                <ol className="space-y-2">
                  {project.testing.questions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand mr-3 font-semibold">{index + 1}.</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
              {project.testing.method.length ? (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">How I’ll find out</h3>
                  <ul className="space-y-2">
                    {project.testing.method.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-brand mr-3">→</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {/* Finished Prototype Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">
          {project.prototypeTitle ?? 'Finished Prototype'}
        </h2>
        <div className="bg-card p-8 rounded-xl shadow-sm">
          <p className="text-muted-foreground leading-relaxed mb-6">{project.prototype.description}</p>

          <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
          <ul className="space-y-3 mb-8">
            {project.prototype.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-brand mr-3">✓</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          {figmaEmbedUrl ? (
            <div className="bg-muted h-96 rounded-lg overflow-hidden mb-6 border border-border">
              <iframe
                src={figmaEmbedUrl}
                title={`${project.title} prototype preview`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : hasPrototypeLink ? (
            <a
              href={project.prototype.link}
              target="_blank"
              rel="noreferrer"
              className="bg-muted h-96 rounded-lg flex items-center justify-center mb-6 hover:bg-muted/80 transition-colors"
            >
              <span className="text-muted-foreground">Interactive prototype preview (click to open)</span>
            </a>
          ) : (
            <div className="bg-muted h-96 rounded-lg flex items-center justify-center mb-6">
              <span className="text-muted-foreground">Interactive prototype preview</span>
            </div>
          )}

          <div className="flex gap-4">
            <a
              href={project.prototype.link}
              className="px-6 py-3 bg-brand-deep text-black font-medium rounded-lg hover:bg-brand-hover transition-colors"
            >
              {project.prototypeLinkLabel ?? 'View Interactive Prototype'}
            </a>
          </div>
        </div>
      </section>

      {project.roadmap ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What’s Next</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            {project.roadmapIntro ?? 'The same interview surfaced member-side ideas that are now on the roadmap:'}
          </p>
          <ul className="grid gap-4 md:grid-cols-2">
            {project.roadmap.map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                <span className="text-brand">→</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.learned ? (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">What I Learned</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {project.learned.map((lesson, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">{lesson}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
