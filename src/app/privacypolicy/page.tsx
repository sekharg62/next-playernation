import LegalPageLayout from "@/components/LegalPageLayout";
import { CONTACT_EMAIL } from "@/constants";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PlayerNation",
  description:
    "StatMagic Sports LLP privacy policy for PlayerNation websites, apps, and services.",
};

const linkClass = "text-primary underline underline-offset-2 hover:text-primary/80";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy — StatMagic Sports LLP"
      lastUpdated="June 22, 2026"
    >
      <section>
        <h2>1. Introduction</h2>
        <p>
          <strong>1.1.</strong> StatMagic Sports LLP (collectively, &quot;StatMagic&quot;,
          &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) collects and processes personal data
          relating to the purchase of StatMagic&apos;s services and products, the general use and
          administration of our Platforms (as defined herein), and our development of our services
          and products.
        </p>
        <p>
          <strong>1.2.</strong> This Privacy Policy (&quot;Policy&quot;) outlines StatMagic&apos;s
          practices in relation to the processing of your personal data that may be accessed by us
          or you may have chosen to share with us when you engage with us or visit our website
          available at{" "}
          <a
            href="https://www.theplayernation.com"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            https://www.theplayernation.com
          </a>{" "}
          and our application &apos;PlayerNation&apos; available at{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.playernation.app"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            play.google.com/store/apps/details?id=com.playernation.app
          </a>{" "}
          on the Play Store and{" "}
          <a
            href="https://apps.apple.com/pl/app/playernation/id6743133469"
            className={linkClass}
            rel="noopener noreferrer"
            target="_blank"
          >
            https://apps.apple.com/pl/app/playernation/id6743133469
          </a>{" "}
          on the App Store or any other proprietary services through any technological platforms
          offered by us from time to time (&quot;collectively Platforms&quot;).
        </p>
        <p>
          <strong>1.3.</strong> Please read this Policy carefully to understand our practices
          regarding your personal data and how we will treat it. This Policy sets out the basis on
          which any personal data we collect from you, we collect about you, or that you provide to
          us, will be processed by us.
        </p>
      </section>

      <section>
        <h2>2. Collection and use of personal data</h2>
        <p>
          <strong>2.1.</strong> We may use your personal data to provide and customize our products
          and services, to process your transactions when you place an order or register for, camps,
          clinics, tournaments, leagues, or other activities or events (collectively,
          &quot;Events&quot;) through our products or services, to provide customer support, to
          communicate with you, to administer and improve our products and services, to maintain
          security and prevent fraud, to meet our legal obligations, or otherwise where you direct us
          or give us consent to use your personal data.
        </p>
        <p>
          <strong>2.2.</strong> We may send you periodic marketing and promotional emails, push
          notifications, or text messages to your mobile device (about StatMagic&apos;s services or
          third party products or services), and we will obtain your consent to do so, where
          required by law. If you no longer wish to receive our marketing and promotional
          communications, you may opt out of receiving them by following the opt-out instructions
          included in any communication that you receive from us or by contacting{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
          . Please note that even if you opt out of receiving marketing and promotional
          communications from us, we may still send you administrative and transactional messages
          from which you cannot opt out. We may promote our products and services by publishing
          advertising on our own products and services and by placing ads on third parties&apos;
          services. We also provide advertising services for third party advertisers. We may also
          use your personal data to provide and improve our advertising services, including how we
          target and measure our publishing of ads for third party advertisers.
        </p>
        <p>
          <strong>2.3.</strong> We may use your personal data for purposes such as auditing, data
          analysis, and research to improve StatMagic&apos;s products, services, and customer
          communications. StatMagic may share your personal data and use it as described in this
          Policy. Such data may be combined with other data to provide and improve our products,
          services, content, and advertising. This Policy does not cover and is not intended to
          restrict what we do with information that is aggregated, de-identified, or anonymized, so
          it is no longer associated with an individually identifiable user. Please note that we may
          combine personal data that we collect (as described above) with information from other
          sources and use the combined information for the purposes described in this Policy.
        </p>
        <p>
          <strong>2.4.</strong> Certain StatMagic services use artificial intelligence technology
          (&quot;AI&quot;) to match a user in a video to their User Profile (as defined herein) on
          the Platforms. In certain cases, AI matches athletes to User Profiles based on their
          jersey numbers or clothing. In other cases, the AI matches athletes to player profiles
          based on their general appearance in the video which includes aspects like their hairstyle,
          facial recognition, running posture, shoes, or general look that are grouped together to
          show a representative image of the user. In either instance, the direct user, coach or team
          administrator matches the group of AI images of the presumptive user to the correct User
          Profile. Through AI tracking, our services can create user statistics tied to a User
          Profile. We may use uploaded videos and de-identified usage data to train our AI model and
          improve our services.
        </p>
        <p>
          <strong>2.5.</strong> StatMagic services may also utilize AI to generate summaries and
          insights based on analysis of various data sources, which may include, among other
          sources, publicly available information and third-party datasets. When a user requests a
          summary, the generated content may include personal data if such information exists within
          the analyzed data sources.
        </p>
      </section>

      <section>
        <h2>3. The data we collect about you</h2>
        <p>
          <strong>3.1.</strong> We collect or obtain data relating to you in a variety of ways, as
          described below depending on the specific purposes and circumstances of our processing of
          personal data and such data may include personal data or information, that is, information
          relating to an identified or identifiable natural person. We may collect or receive the
          following categories of data about you:
        </p>
        <ol>
          <li>
            <strong>Identity Data:</strong> This includes data such as your first and last name, date
            of birth, preferences and interests, relationship to user (for family members), User
            Profile information (as described in Section 4 below), organisation name and
            identification documents.
          </li>
          <li>
            <strong>Contact Data:</strong> This includes data such as your phone number and email
            address.
          </li>
          <li>
            <strong>Financial Data:</strong> This includes data such as your financial information,
            bank account details, etc., where you choose to make such data available to us.
          </li>
          <li>
            <strong>Technical Data:</strong> This includes data such as your internet protocol
            address, type and versions, Platform usage data, operating systems, device information,
            and data collected through cookies and other technologies. We may receive and store
            certain types of Platform usage information when you visit the Platforms. Platforms&apos;
            usage information helps us determine how visitors arrive, what type of content is most
            popular and which visitors are interested in particular content and advertising. We may
            collect the page visited, the time, the source of the request, the type of browser making
            the request, the preceding page view and other information about your engagement with
            our site and services. We may also collect your IP address and your Device Identifier. A
            Device Identifier is a number automatically assigned to the computer, cell phone or
            tablet used to access the Internet. We may associate your Device Identifier with the
            personal data you provide.
          </li>
          <li>
            <strong>Scanning Data:</strong> We may collect and process sound and video recordings
            from sporting events, together with the identification of certain features necessary to
            provide our services. This may include, without limitation, recognition of your face,
            posture, running style, gait, clothing, jersey number, shoes or other identifiable
            characteristics captured during such recording.
          </li>
          <li>
            <strong>Event Data:</strong> This includes data that you provide to us in the course of
            registering for and attending any Event.
          </li>
        </ol>
        <p>
          <strong>3.2.</strong> You may be asked to provide personal data when you come in contact
          with StatMagic. We are required to collect your personal data to engage with you or
          provide you with our services. If you fail to provide us that data as and when requested
          by us, we may not be able to engage with you or provide our services.
        </p>
        <p>
          <strong>3.3.</strong> We also collect, use, and share aggregated data such as statistical
          or demographic data for any purpose. Aggregated data could be derived from your personal
          data but is not considered personal data under applicable laws.
        </p>
        <p>
          <strong>3.4.</strong> StatMagic is committed to seeking to safeguard all personal data
          that you provide to us; seeking to ensure that it remains confidential and secure; and
          taking all reasonable steps to ensure that personal privacy is respected. All our data is
          stored in written or electronic form on our servers and computers and in various physical
          locations. We maintain reasonable physical, technical and administrative safeguards to
          protect your personal data from misuse, unauthorized access or disclosure, and loss or
          corruption by computer viruses and other sources of harm. We limit access to personal data
          to those staff members and third parties who need to know that information for the
          purposes set out in this Policy.
        </p>
      </section>

      <section>
        <h2>4. User profile pages</h2>
        <p>
          <strong>4.1.</strong> For the purposes of this Policy, &quot;User Profiles&quot; refer to
          accounts created and maintained on the Platform(s) that enable access to StatMagic&apos;s
          sports performance and video analysis services. Depending on whether a user participates
          independently or as part of a team or organization, the profile may operate in one of two
          forms:
        </p>
        <ol>
          <li>
            An organization-associated profile applies to users who participate in services as part
            of a team or organization. In addition to the functions available to individual users,
            these profiles may include team-based data, shared performance metrics, and collective
            video analysis accessible to coaches, administrators, and other authorized team
            members. If you are designated a coach, team admin, or organization admin by the
            individual creating your account or by someone at StatMagic creating your account, and
            register to create an account or are registered for one of these accounts, we will
            collect personal data which may be provided by you or by the person who designated you as
            a coach, team admin, or organization admin. This information may include your full name,
            email address, phone number, the list of athletes (team roster) submitted to the
            Platform, and any content you choose to upload.
          </li>
          <li>
            An individual profile applies to users who access services independently, without
            affiliation to a team or organization. These profiles provide functions comparable to
            those available to organizational customers, but are limited to the user&apos;s own
            performance data and analysis.
          </li>
        </ol>
        <p>
          This Policy describes the collection, use, and disclosure of personal data related to both
          types of User Profiles.
        </p>
        <p>
          <strong>4.2.</strong> When you sign up for community groups as part of the Platforms, your
          User Profile may at your choice publicly display information such as your name, user ID,
          group memberships, participation history, and activity statistics (including posts,
          contributions, achievements, and points earned) to such community groups. Leaderboard data
          such as rankings, scores, badges, and other recognition may also be displayed, along with
          optional profile elements like a short biography, photo or avatar, and social media
          handles you choose to share. This information can be accessed by you, group
          administrators, and other users of the community, while the general public may only see
          limited details such as username, avatar, and leaderboard position.
        </p>
        <p>
          <strong>4.3.</strong> Special category information as well as any personal information
          including contact details, birth date, and personal statistics - is not available to the
          general public by default. Any information, including special category data, that is made
          publicly visible shall be solely optional and at the discretion of the user, who may choose
          to opt out of such public display at any time.
        </p>
      </section>

      <section>
        <h2>5. How we collect data about you</h2>
        <p>
          <strong>5.1.</strong> We use different methods, as permitted under applicable laws, to
          process personal data about you. This includes:
        </p>
        <ol>
          <li>
            <strong>Information you provide us:</strong> This is the information (such as Identity
            Data, Contact Data, Financial Data you consent to give us when you use our services, or
            engage or correspond with us (for example, by email, registration on the Platforms,
            voice call or text message).
          </li>
          <li>
            <strong>Information we collect about you and your device:</strong> Each time you visit
            the Platforms, we will automatically collect personal data using cookies and other
            analytical tools (including Technical Data).
          </li>
          <li>
            <strong>Information we receive from other sources including third parties and publicly
            available sources:</strong> We may receive personal data about you from various third
            parties such as analytics providers, advertising networks, search information providers,
            and other publicly available sources.
          </li>
        </ol>
      </section>

      <section>
        <h2>6. How we use your personal data and for what purposes</h2>
        <p>
          <strong>6.1.</strong> We will only use your personal data in accordance with applicable
          laws. Most commonly, we will use your personal data to engage with you or provide you with
          our services, or where we need to comply with a legal obligation.
        </p>
        <p>
          <strong>6.2.</strong> In general, we use your personal data for the following purposes:
        </p>
        <ol>
          <li>To engage with you or provide you with our services;</li>
          <li>To manage our relationship with you, including notifying you of changes to any services;</li>
          <li>To facilitate use of the Platforms and to ensure that our content is relevant;</li>
          <li>To conduct KYC compliance processes as required under applicable laws;</li>
          <li>
            To administer and protect our business and the Platform, including troubleshooting, data
            analysis, system testing, and performing internal operations;
          </li>
          <li>To monitor trends so we can improve our Platform and services;</li>
          <li>
            To perform our obligations that arise out of the arrangement we are about to enter or
            have entered with you;
          </li>
          <li>To undertake marketing and business development activities;</li>
          <li>To carry screening or due diligence checks;</li>
          <li>
            To detect and protect us against error, fraud, money laundering and other criminal
            activities;
          </li>
          <li>To detect, respond, and recover from cybersecurity incidents; and</li>
          <li>To ensure compliance with applicable laws.</li>
        </ol>
        <p>
          <strong>6.3.</strong> Where applicable laws permit us to, we rely on your consent as a
          ground to process your personal data. In addition to the above we rely on the following
          legal bases for processing your personal data:
        </p>
        <ol>
          <li>
            <strong>Legitimate interest,</strong> which means our interest in conducting and managing
            our business to enable us to provide you with the best services, and the best and most
            secure experience. We ensure we consider and balance any potential impact on you (both
            positive and negative) and your rights before we process your personal data for our
            legitimate interests. We do not use your personal data for activities where our interests
            are overridden by the impact on you (unless we have your consent or are otherwise
            required or permitted to by law).
          </li>
          <li>
            <strong>Performance of a contract,</strong> which means we process your data where it is
            necessary for the performance of a contract to which you are a party or to take steps
            before entering into such a contract.
          </li>
          <li>
            <strong>To comply with a legal obligation,</strong> which means processing your personal
            data where it is necessary for compliance with a legal obligation that we are subject
            to.
          </li>
        </ol>
        <p>
          <strong>6.4.</strong> We may process your personal data under more than one lawful ground
          depending on the specific purpose for which we are using your personal data. Please note
          that we may process your personal data without your knowledge or consent, in compliance
          with the above rules, where this is required or permitted by law.
        </p>
        <p>
          <strong>6.5.</strong> We will only use your personal data for the purposes for which we
          collected it, unless we reasonably consider that we need to use it for another reason and
          that reason is compatible with the original purpose. If you wish to get an explanation as
          to how the processing for the new purpose is compatible with the original purpose, please
          contact us in accordance with this Policy. If we need to use your personal data for an
          unrelated purpose, we will notify you and we will explain the legal basis which allows us
          to do so.
        </p>
      </section>

      <section>
        <h2>7. How we share your personal data</h2>
        <p>
          <strong>7.1.</strong> You hereby agree and acknowledge that any and all information
          pertaining to you, may be shared by us with third parties (such as service providers who
          provide information technology services) in accordance with your consent where required
          under applicable laws.
        </p>
        <p>
          <strong>7.2.</strong> We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law and only permit them to process your
          personal data for specified purposes and in accordance with our instructions as laid down
          below.
        </p>
        <ol>
          <li>
            <strong>Our agents, representatives, and independent contractors.</strong> We may
            disclose your personal data to such third parties where related to our functions and
            services for us.
          </li>
          <li>
            <strong>Our service providers and third-party partners.</strong> We may disclose your
            personal data to third parties that provide services to us or provide features as part
            of our products or services, including: cloud storage services; system hosting services;
            research partners; data security services; fraud prevention; payment processing
            services; delivery services; analytics services; legal services; professional services;
            age verification services; and other services.
          </li>
          <li>
            <strong>Our organization&apos;s customers.</strong> We may disclose your personal data to
            our third-party organization customers who offer Programs described in this Policy. When
            you register yourself or your child for a Program offered by one of these organization
            customers, we may collect documents and information specified by that organization and
            disclose such documents and information to them. In these cases, your personal data is
            shared only as necessary to facilitate the transaction or service with the relevant
            third party.
          </li>
          <li>
            <strong>Our licensees.</strong> We may disclose your personal data to licensees of
            content where you, our customers, or others have given us permission to share such
            content.
          </li>
          <li>
            <strong>Our marketing and advertising partners.</strong> We may disclose your personal
            data to our marketing and advertising partners, including Social Media platforms,
            third-party advertising networks, and other parties to assist in serving and measuring our
            or their advertisements, in compliance with applicable law. We may disclose your personal
            data to business partners and third parties (e.g., other companies, Social Media
            platforms, third-party advertising networks) for their own purposes, including
            marketing products or services to you, showing you relevant advertising, or providing an
            enhanced experience that integrates with one of our products or services. When required,
            we will ask for your consent or provide opportunities to opt-out.
          </li>
          <li>
            <strong>Other users of our products and services.</strong> We may disclose your personal
            data to other users of our products and services if you choose to make such information
            public or you select sharing features on our products or services. For example, if you
            share highlights publicly on the PlayerNation application, such highlights will be
            viewable by Platform visitors.
          </li>
          <li>
            <strong>In connection with legal matters.</strong> We may share your personal data when we
            believe that the disclosure is reasonably necessary to comply with applicable laws,
            regulations, legal processes, or legal requests.
          </li>
          <li>
            <strong>In connection with potential illegal activity, misuse, threats, or other
            situations.</strong> We may share your personal data when we believe that the disclosure
            is necessary to investigate, prevent, or take action regarding illegal activities,
            suspected fraud, situations involving potential threats to the physical safety of any
            person, violations of our terms and conditions, or as otherwise required by law.
          </li>
          <li>
            <strong>Other third parties.</strong> We may disclose your personal data to other parties
            at your direction or with your consent. We may also disclose your personal data to other
            parties if we believe it necessary or appropriate either: (a) under applicable law; (b)
            to protect our operations and those of any of our affiliates; (c) to protect our rights,
            privacy, safety or property, and those of others; or (d) to allow us to pursue available
            remedies or limit damages that we may sustain.
          </li>
        </ol>
        <p>
          <strong>7.3.</strong> We may disclose your personal data for other reasons that we will
          describe at the time of information collection or prior to sharing your information. Any
          disclosure to third parties will only take place in accordance with the applicable law
          and for the purposes listed. Except as otherwise provided by applicable law, StatMagic is
          not responsible for the privacy practices of any third parties.
        </p>
        <p>
          <strong>7.4.</strong> You agree and acknowledge that we may share data where we are required
          by law, any court, government agency, or authority to disclose such information. Such
          disclosures are made in good faith and belief that it is reasonably necessary to do so for
          enforcing this Policy, or in order to comply with any applicable laws and regulations.
        </p>
        <p>
          <strong>7.5.</strong> StatMagic uses third-party vendors and hosting partners to provide
          the necessary hardware, software, networking, storage and related technology required to
          run the Platforms, and such third-party vendors may collect and store your data on behalf
          of StatMagic. StatMagic owns the code, databases and all rights therein. StatMagic
          incorporates reasonable safeguards to help protect and secure your personal data.
          However, no data transmission over the Internet, wireless transmission, or electronic
          storage of information can be guaranteed to be 100% secure. Please note that StatMagic
          cannot ensure or warrant the security of any information you transmit via its Platforms,
          and you do so at your own risk. The Platforms are general audience Platforms.
        </p>
      </section>

      <section>
        <h2>8. StatMagic&apos;s data protection role</h2>
        <p>
          <strong>8.1.</strong> With regards to the use of the Platforms as well as the various
          related features and services (which include uploading videos on the Platforms or external
          sites and platforms (including sharing of personal data and statistics by the use of the
          Platforms), on-demand accessibility, User Profile, analysis) you or such customer will act
          as the data controller/data fiduciary (as applicable if you are in the United Kingdom/
          European Economic Area or India) and StatMagic will act as data processor. This means that
          StatMagic in its role as data processor will refer any questions, comments or enquiries
          from the data subjects or any other third party (e.g. data recipients receiving personal
          data via the Platforms) in relation to these data processing activities to the relevant
          customer.
        </p>
        <p>
          <strong>8.2.</strong> A user/customer who is a natural person as opposed to legal entities
          such as sports clubs, organizations, associations, companies, or authorities - may be
          exempt from GDPR obligations when processing personal data in the course of purely personal
          or household activities. This is also known as the &quot;household exemption&quot;. The
          precise scope of this exemption to the applicability of GDPR is narrow. Activities such as
          video recording of multiple persons in a public space, streaming to external platforms, or
          disclosure of personal data to a larger public group may not qualify for this exemption,
          even if it is done by a natural person. In situations where a user/customer may validly
          invoke this exemption StatMagic will still act as a data processor and comply with all data
          processor obligations outlined in the GDPR and other applicable law and in StatMagic&apos;s
          data processing agreement available at{" "}
          <Link href="/dataprocessingagreement" className={linkClass}>
            theplayernation.com/dataprocessingagreement
          </Link>
          . StatMagic strongly recommends and encourages all customers to comply with the
          obligations of data controllers under GDPR, data fiduciaries under the Digital Personal
          Data Protection Act, 2023 or any other data protection regulation in a jurisdiction (as
          applicable).
        </p>
        <p>
          <strong>8.3.</strong> Determining the role(s) of the third parties receiving personal data
          shared by the users/customers via the Platforms depends on the specific circumstances.
          StatMagic, however, has no say and takes no part in such assessments. Therefore, the
          customers and the relevant third parties are individually responsible for compliance with
          any applicable data protection legislation, including the GDPR and Digital Personal Data
          Protection Act, 2023 or any other data protection regulation in a jurisdiction, in this
          regard.
        </p>
      </section>

      <section>
        <h2>9. Data security</h2>
        <p>
          <strong>9.1.</strong> We have put in place appropriate security measures to prevent your
          personal data being accidentaly lost, used, or accessed in an unauthorised way, altered,
          or disclosed.
        </p>
        <p>
          <strong>9.2.</strong> We have put in place procedures to deal with any actual or suspected
          data breach and will notify you and any applicable regulator of a breach where we are
          legally required to do so.
        </p>
      </section>

      <section>
        <h2>10. Data retention and destruction</h2>
        <p>
          <strong>10.1.</strong> We keep personal data only for as long as necessary to fulfill the
          purposes for which we have collected it as set out in this Policy, including for the
          purposes of satisfying any legal, accounting, or reporting requirements, unless longer
          retention is required by applicable law. We also retain information when necessary to
          comply with contractual and legal obligations, when we have a legitimate business interest
          to do so (such as improving and developing our products and services, and enhancing their
          safety, security and stability), and for the exercise or defense of legal claims. We will
          not retain any of your personal data beyond this period and the retention of your personal
          data will be subject to periodic review.
        </p>
        <p>
          <strong>10.2.</strong> To determine the appropriate retention period for personal data, we
          consider the amount, nature and sensitivity of the personal data; the potential risk of
          harm from unauthorized use or disclosure of the personal data; the purposes for which we
          use the personal data; whether we can achieve those purposes through other means; and the
          applicable laws that require us to retain information for regulatory purposes or permit us
          to retain the data to preserve our legal rights.
        </p>
        <p>
          <strong>10.3.</strong> We may keep an anonymized form of your personal data, which will no
          longer refer to you, for statistical purposes without time limits, to the extent that we
          have a legitimate and lawful interest in doing so.
        </p>
        <p>
          <strong>10.4.</strong> Specific retention periods vary depending on the type of personal
          data. For example, financial records are retained for 7 years to comply with tax law,
          account information is retained while your account is active and for up to 2 years after
          closure, and marketing data is retained until you withdraw consent or for 2 years after
          your last interaction with us. We conduct annual reviews of retained data and delete or
          anonymize information once it is no longer required. You may request further details of
          specific retention periods by contacting us.
        </p>
      </section>

      <section>
        <h2>11. Your legal rights</h2>
        <p>
          <strong>11.1.</strong> Under certain circumstances, you have rights under data protection
          laws in relation to your personal data. Subject to the data protection laws that apply to
          you, you may have the right to:
        </p>
        <ol>
          <li>
            <strong>Request access to your personal data.</strong> This enables you to receive a copy
            of the personal data we hold about you and to check that we are lawfully processing it.
          </li>
          <li>
            <strong>Request confirmation</strong> as to whether or not your personal data is being
            processed.
          </li>
          <li>
            <strong>Request the correction of the personal data that we hold about you.</strong> This
            enables you to have any incomplete or inaccurate data we hold about you corrected, though
            we may need to verify the accuracy of the new data you provide to us.
          </li>
          <li>
            <strong>Request the erasure of your personal data.</strong> This enables you to ask us to
            delete or remove personal data where there is no reason for us to continue processing
            it. You also have the right to ask us to delete or remove your personal data where you
            have successfully exercised your right to object to processing (see below), where we may
            have processed your information unlawfully or where we are required to erase your
            personal data to comply with local law. However, we may not always be able to comply with
            your request of erasure for specific legal reasons which will be notified to you, if
            applicable, at the time of your request. Where our services require processing of data
            for others (for example, shared team records or contractual obligations), we will either
            anonymize your data or restrict its use to the minimum necessary. If legal or contractual
            obligations require us to retain certain data, we will notify you of the specific
            reasons and the retention period. All erasure requests are logged, assessed, and
            responded to within timelines prescribed under applicable law.
          </li>
          <li>
            <strong>Object to processing of your personal data</strong> where we are relying on a
            legitimate interest (or those of a third party) and there is an aspect about your
            particular situation which makes you want to object to processing on this ground as you
            feel it impacts your fundamental rights and freedoms. In some cases, we may demonstrate
            that we have compelling legitimate grounds to process your information which override
            your rights and freedoms.
          </li>
          <li>
            <strong>Request restriction of processing of your personal data.</strong> This enables you
            to ask us to suspend the processing of your personal data in the following scenarios:
            <ul>
              <li>If you want us to establish the data&apos;s accuracy.</li>
              <li>Where our use of the data is unlawful but you do not want us to erase it.</li>
              <li>
                Where you need us to hold the data even if we no longer require it as you need it to
                establish, exercise, or defend legal claims.
              </li>
              <li>
                You have objected to our use of your data but we need to verify whether we have
                overriding legitimate grounds to use it.
              </li>
            </ul>
          </li>
          <li>
            <strong>Request the transfer of your personal data to you or to a third party.</strong>{" "}
            We will provide to you, or a third party you have chosen, your personal data in a
            structured, commonly used, and machine-readable format. This right only applies to
            automated information which you initially provided consent for us to use or where we
            used the information to perform a contract with you.
          </li>
          <li>
            <strong>Withdraw consent at any time</strong> where we are relying on consent to process
            your personal data. However, this will not affect the lawfulness of any processing carried
            out before you withdraw your consent. If you withdraw your consent, we may not be able
            to engage with you or provided our services to you. We will advise you if this is the case
            at the time you withdraw your consent
          </li>
        </ol>
        <p>
          <strong>11.2.</strong> If you wish to exercise any of the rights set out above, please write
          an email to the Grievance Officer, whose details are mentioned in Section 19 of this
          Policy.
        </p>
        <p>
          <strong>11.3.</strong> We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal data (or to exercise
          any of your other rights). This is a security measure to ensure that personal data is not
          disclosed to any person who has no right to receive it. We may also contact you to ask you
          for further information in relation to your request to speed up our response.
        </p>
        <p>
          <strong>11.4.</strong> We try to respond to all legitimate requests within one month.
          Occasionally it could take us longer than a month if your request is particularly complex
          or you have made a number of requests. In this case, we will notify you and keep you
          updated.
        </p>
      </section>

      <section>
        <h2>12. Transfer of personal data</h2>
        <p>
          <strong>12.1.</strong> We only pass on personal data to others when the law allows it or
          requires it. We transfer personal data to the following recipients to/from the EU/EEA and
          the US:
        </p>
        <ol>
          <li>
            Data processors as provided on{" "}
            <Link href="/sub-processors" className={linkClass}>
              theplayernation.com/sub-processors
            </Link>
            ;
          </li>
          <li>External suppliers; or</li>
          <li>Authorities,</li>
        </ol>
        <p>
          <strong>12.2.</strong> We use external companies as suppliers from time to time to assist us
          in delivering our services. The external suppliers will only receive and process personal
          data when this is in accordance with applicable law. Where external suppliers are
          considered a data processor, the processing of personal data on our behalf will be governed
          by a data processing agreement. Where the external parties are data controllers, the
          processing of personal data will be performed based on said external parties&apos; own data
          privacy policy and legal bases which the external parties are obligated to inform about,
          unless the applicable legislation allows otherwise.
        </p>
        <p>
          <strong>12.3.</strong> StatMagic Sports LLP is headquartered in India, and personal data may
          be transferred to and processed in India for the purpose of providing services. As India
          does not currently benefit from an adequacy decision under the GDPR, such transfers are
          made subject to Standard Contractual Clauses approved by the European Commission, together
          with supplementary technical and organizational measures (including encryption and
          restricted access) to ensure your data is protected.
        </p>
        <p>
          <strong>12.4.</strong> We transfer personal data to countries or international
          organisations outside the EU/EEA. When we make such transfers, these are primarily based
          on an adequacy decision by the European Commission or the standard contractual clauses of
          the European Commission.
        </p>
        <p>
          <strong>12.5.</strong> In certain cases, personal data may also be transferred to the
          European Union (EU) or the United States. Transfers within the EU are subject to the GDPR
          framework.
        </p>
        <p>
          <strong>12.6.</strong> You also have the right to lodge a complaint with your local
          supervisory authority if you believe that any international transfer of your personal data
          does not comply with applicable law.
        </p>
        <p>
          <strong>12.7.</strong> If you have any questions about our use of data processors,
          cooperation with other data controllers, incl. or transferring of data to third countries,
          please contact us for more information or documentation on the contact details below.
        </p>
      </section>

      <section>
        <h2>13. Children&apos;s data</h2>
        <p>
          <strong>13.1.</strong> We do not knowingly collect personal data from children under age
          sixteen (16) (or the otherwise applicable age of digital consent in any particular
          jurisdiction). Children under the applicable age of digital consent are not permitted to
          use our Platforms and services, and must request the relevant organisation&apos;s adult,
          parent or guardian provide any personal data in connection with the Platforms and/or
          services. We will delete any information later determined to have been collected from an
          underage user. Coaches and User Profile&apos;s administrators may add underage users to a
          team roster and/or direct invite codes to such users only with express written consent from
          a parent or legal guardian. StatMagic is not liable for obtaining such consent on behalf of
          such an organisation/coach.
        </p>
        <p>
          <strong>13.2.</strong> If you are a parent uploading the information of your child, we will
          collect the information mentioned above in relation to your child, and your contact
          information to enable you to log in via the User Profile. Please note that when you create
          a User Profile for your child, the minor&apos;s personal data may be accessed by the
          athlete, coaches, and possibly other users and may optionally be linked at your request.
        </p>
        <p>
          <strong>13.3.</strong> Where the Customer&apos;s use of the Platform involves the recording,
          processing, or analysis of footage in which minors under the age of 16 may appear,
          including where such minors are added to a team roster by a coach or administrator, the
          Customer accepts sole responsibility for:
        </p>
        <ol>
          <li>
            obtaining prior written consent from the parent or legal guardian of each such minor
            before that minor participates in any activity where their image or biometric
            characteristics may be captured and processed by the Platform;
          </li>
          <li>
            maintaining records of all such consents and making them available to StatMagic or any
            relevant supervisory authority upon request;
          </li>
          <li>
            ensuring that any consent obtained is freely given, specific, informed, and explicit in
            accordance with applicable Data Protection Legislation; and
          </li>
          <li>
            promptly notifying StatMagic if consent for any minor is withdrawn, upon which StatMagic
            shall take reasonable steps to delete or anonymise the relevant biometric data associated
            with that minor.
          </li>
          <li>
            StatMagic shall not be liable for any failure by the Customer to obtain or maintain
            valid parental or guardian consent in respect of minors, and the Customer shall indemnify
            StatMagic against any claims, penalties, or liabilities arising from such failure.
          </li>
        </ol>
      </section>

      <section>
        <h2>14. Cookies</h2>
        <p>
          <strong>14.1.</strong> Cookies are small data files that are stored on your device. We use
          cookies and other tracking technologies to distinguish you from other users of the Platform
          and to remember your preferences. This helps us provide you with a good experience when
          you use our Platform and also allows us to improve the services.
        </p>
        <p>
          <strong>14.2.</strong> We identify you by way of using cookies. The cookies shall not
          provide access to data in your device such as email addresses or any other data that can
          be traced to you personally. The data collected by way of cookies will allow us to provide
          you with a tailored and user-friendly experience. The cookies shall enable you to access
          certain features of the Platform. Most devices can be set to notify you when you receive a
          cookie or prevent cookies from being sent. If you prevent cookies from being sent, it may
          limit the functionality that we can provide when you visit the Platform.
        </p>
        <p>
          <strong>14.3.</strong> Additionally, you may encounter cookies or other similar technologies
          on certain pages of the Platform that are placed by third parties. We do not control the
          use of cookies by such third parties.
        </p>
      </section>

      <section>
        <h2>15. Single-sign on</h2>
        <p>
          We offer Single Sign‑On (SSO) so you can log in using your existing accounts with trusted
          third‑party providers (such as Google or Microsoft). If you choose to use SSO, only the
          minimum information needed to confirm your identity is shared between our service and the
          provider. We do not receive or store your full login credentials (like your password).
        </p>
        <p>
          Your use of SSO means you consent to this limited data exchange for authentication
          purposes. Please note that each provider has its own privacy and security practices, which
          apply when you use their service. You can always choose not to use SSO and instead create a
          direct login with us.
        </p>
        <p>
          We take steps to protect your information and comply with applicable privacy laws, but we
          cannot control how third‑party providers handle your data. We encourage you to review
          their privacy policies for more details.
        </p>
      </section>

      <section>
        <h2>16. Third party websites</h2>
        <p>
          Some links on the Platforms may redirect you to third-party websites and services that we
          do not operate. We may also offer social sharing tools that let you share actions on the
          Platforms with other websites and vice versa. The privacy practices of these websites and
          services will be governed by their own privacy policies. We encourage you to review and
          understand their privacy policies before disclosing any personal data to them.
        </p>
      </section>

      <section>
        <h2>17. Business transitions</h2>
        <p>
          You agree and acknowledge that in the event we go through a business transition, such as a
          merger, acquisition by another organisation, or sale of all or a portion of our assets, your
          personal data may be among the assets transferred.
        </p>
      </section>

      <section>
        <h2>18. Change in policy</h2>
        <p>
          <strong>18.1.</strong> The most current version of the Policy will govern our use of your
          information and will always be available at{" "}
          <Link href="/privacypolicy" className={linkClass}>
            theplayernation.com/privacypolicy
          </Link>
          . By using our websites, services, and products and the Platforms, you acknowledge your
          agreement to the terms of this Policy.
        </p>
        <p>
          <strong>18.2.</strong> We keep our Policy under regular review and may amend it from time to
          time, at our sole discretion.
        </p>
        <p>
          <strong>18.3.</strong> The terms of this Policy may change and if they do, these changes
          will be posted on this page and, where required by applicable laws, notified to you. If so,
          we will notify you about material changes in the way we treat personal data by sending a
          notice to the email address specified in your User Profile or by placing a prominent notice
          on our Platform.
        </p>
      </section>

      <section>
        <h2>19. Grievance officer</h2>
        <p>
          You may contact our Grievance Officer – Mr. Siddarth Raheja with any inquiry relating to
          this Policy or your personal data at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
}
