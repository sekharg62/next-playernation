import LegalPageLayout from "@/components/LegalPageLayout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Processing Agreement | PlayerNation",
  description:
    "Data Processing Agreement between StatMagic Sports LLP and customers using the PlayerNation platform.",
};

const linkClass = "text-primary underline underline-offset-2 hover:text-primary/80";

export default function DataProcessingAgreementPage() {
  return (
    <LegalPageLayout title="Data Processing Agreement" lastUpdated="June 22, 2026">
      <p>
        This DATA PROCESSING AGREEMENT (&quot;DPA&quot;) is incorporated into the Terms and
        Conditions available at{" "}
        <Link href="/termsandconditions" className={linkClass}>
          theplayernation.com/termsandconditions
        </Link>{" "}
        (the &quot;Master Agreement&quot;), pursuant to which StatMagic Sports LLP
        (&quot;StatMagic&quot;) has agreed to provide the Customer with access to the Platform in
        relation to the availing of Services by the Customer. This DPA sets out the additional
        terms, requirements, and conditions under which StatMagic will process Personal Data in
        connection with the Platform.
      </p>
      <p>
        In the case of conflict or ambiguity between (a) any provision contained in the body of
        this DPA and any provision contained in any Schedule, the provision in the body of this DPA
        will prevail; and (b) notwithstanding anything to the contrary in the Master Agreement,
        any of the provisions of this DPA and the provisions of the Master Agreement, the
        provisions of this DPA will prevail.
      </p>

      <section>
        <h2>1. Definitions and interpretation</h2>
        <h3>1.1 Definitions:</h3>
        <ol>
          <li>
            &quot;Biometric Data&quot; shall mean Personal Data resulting from specific technical
            processing relating to the physical, physiological, or behavioural characteristics of a
            natural person, including but not limited to facial geometry, gait, body measurements,
            and movement signatures extracted from video or audio recordings, which allows or
            confirms the unique identification of that natural person.
          </li>
          <li>
            &quot;Customer&quot; shall mean a customer who has agreed to the Master Agreement with
            StatMagic for using the Platform and for availing the Services.
          </li>
          <li>
            &quot;Data Protection Legislation&quot; shall mean the GDPR and all other legislation
            and regulatory requirements in force from time to time which apply to a party with
            respect to the use of Personal Data.
          </li>
          <li>
            &quot;Data Subject&quot; shall mean an individual who is the subject of Personal Data.
          </li>
          <li>&quot;EEA&quot; means the European Economic Area.</li>
          <li>
            &quot;GDPR&quot; means the General Data Protection Regulation ((EU) 2016/679).
          </li>
          <li>
            &quot;Personal Data&quot; shall mean any information relating to an identified or
            identifiable natural person (including Biometric Data) that is processed by StatMagic
            in connection with the Platform and provision of the Services pursuant to the terms
            of the Master Agreement.
          </li>
          <li>
            &quot;Personal Data Breach&quot; shall mean a breach of security leading to the
            accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or
            access to, Personal Data transmitted, stored, or otherwise processed on systems
            managed or controlled by StatMagic.
          </li>
          <li>
            &quot;Platform&quot; shall mean StatMagic&apos;s software application and related
            tools through which the Services are provided, enabling the recording, upload,
            processing, storage, analysis, and sharing of video and audio recordings and related
            sporting data pursuant to the Master Agreement;
          </li>
          <li>
            &quot;Processing&quot; (and the terms &quot;processes&quot; and &quot;process&quot;
            shall be construed accordingly) means any operation or set of operations which is
            performed on Personal Data or on sets of Personal Data, whether or not by automated
            means, such as collection, recording, organisation, structuring, storage, adaptation
            or alteration, retrieval, consultation, use, disclosure by transmission,
            dissemination or otherwise making available, alignment or combination, restriction,
            erasure, or destruction.
          </li>
          <li>
            &quot;Restricted Transfer&quot; means any transfer of Personal Data to a jurisdiction
            for which additional safeguards are prescribed under Data Protection Legislation.
          </li>
          <li>
            &quot;Services&quot; shall mean StatMagic&apos;s services made available to and
            provided to the Customer pursuant to the Master Agreement through provision of the
            Platform.
          </li>
          <li>
            &quot;Special Category Data&quot; shall mean data as defined under Article 9(1) of the
            GDPR, which for the purposes of this DPA shall include Biometric Data processed for
            the purpose of uniquely identifying a natural person.
          </li>
          <li>
            &quot;Standard Contractual Clauses&quot; or &quot;SCCs&quot; shall mean the European
            Commission&apos;s Standard Contractual Clauses, as provided at{" "}
            <Link href="/scc" className={linkClass}>
              theplayernation.com/scc
            </Link>
            .
          </li>
        </ol>
      </section>

      <section>
        <h2>2. Personal data types and processing purposes</h2>
        <p>
          <strong>2.1</strong> The parties agree that for the purpose of the Data Protection
          Legislation, the Customer is the controller and StatMagic is the processor with respect
          to the processing of Personal Data.
        </p>
        <p>
          <strong>2.2</strong> The Customer retains control of the Personal Data and remains
          responsible for compliance with its obligations under the Data Protection Legislation. In
          this regard, the Customer warrants that all Personal Data provided to or otherwise
          accessed by StatMagic under this DPA or the Master Agreement (including that of Data
          Subjects) shall comply in all respects, including in terms of its collection, storage, and
          processing (including providing any required notices and obtaining any required
          consents), with the Data Protection Legislation.
        </p>
        <p>
          <strong>2.3</strong> The Customer further warrants that
        </p>
        <ol>
          <li>
            prior to any processing of Special Category Data or Biometric Data by StatMagic on
            Customer&apos;s instructions, the Customer shall have obtained freely given, specific,
            informed, and unambiguous explicit consent from the Data Subject in accordance with
            Article 9(2)(a) of the GDPR, or shall have otherwise established and documented a valid
            condition under Article 9(2) of the GDPR;
          </li>
          <li>
            to the extent permissible under applicable law, the Customer shall indemnify and hold
            StatMagic harmless from and against any claims, penalties, fines, or liabilities
            arising from the Customer&apos;s failure to obtain valid consent or otherwise establish
            a lawful basis for the processing of a Data Subject&apos;s Personal Data, Special
            Category Data or Biometric Data.
          </li>
          <li>
            Where Data Subjects include minors under the age of 16, the Customer warrants that
            verifiable parental or guardian consent has been obtained prior to the processing of any
            Biometric Data relating to such minors, in addition to the consent obligations set out
            in Clause 2.3(a).
          </li>
        </ol>
      </section>

      <section>
        <h2>3. StatMagic&apos;s obligations</h2>
        <p>
          <strong>3.1.</strong> StatMagic shall only process Personal Data in accordance with the
          Customer&apos;s documented instructions as detailed in Schedule A or as otherwise agreed
          upon between the parties in writing from time to time, and to the extent necessary for
          the provision of the Platform. StatMagic will not process the Personal Data and will
          notify the Customer if, in its opinion, the Customer&apos;s instructions do not comply
          with the Data Protection Legislation.
        </p>
        <p>
          <strong>3.2.</strong> <strong>StatMagic&apos;s Personnel:</strong> StatMagic will ensure
          that the personnel it authorises to process Personal Data are informed of the
          confidential nature of the Personal Data and bound by confidentiality obligations in
          respect of the Personal Data. Access to Personal Data shall be on a need-to-know basis
          and necessary for the performance of the Master Agreement.
        </p>
        <p>
          <strong>3.3.</strong> StatMagic will extend reasonable assistance to the Customer to meet
          the Customer&apos;s compliance obligations under the Data Protection Legislation,
          including in relation to Data Subject rights, data protection impact assessments, and
          reporting to and consulting with supervisory authorities under the Data Protection
          Legislation.
        </p>
        <p>
          <strong>3.4.</strong> In particular, StatMagic shall not:
        </p>
        <ol>
          <li>
            use Biometric Data to train, develop, or improve its own machine learning models or
            algorithms without the prior written consent of the Customer; or
          </li>
          <li>
            share or disclose Biometric Data with any third party other than Sub-processors
            approved in accordance with Clause 7.
          </li>
        </ol>
      </section>

      <section>
        <h2>4. Security</h2>
        <p>
          <strong>4.1.</strong> The Customer acknowledges that in respect of the Personal Data
          processed, StatMagic implements appropriate technical and organisational measures
          detailed in Schedule B to ensure a level of security appropriate to the risk of
          processing.
        </p>
      </section>

      <section>
        <h2>5. Personal data breach</h2>
        <p>
          <strong>5.1.</strong> StatMagic shall, within 72 (Seventy-Two) hours, notify the
          Customer if it becomes aware of any Personal Data Breach.
        </p>
        <p>
          <strong>5.2.</strong> The Customer shall, at all times, remain solely responsible under
          the Data Protection Legislation for reporting Personal Data Breaches to supervisory
          authorities or Data Subjects, as the case may be.
        </p>
        <p>
          <strong>5.3.</strong> The parties will coordinate with each other to investigate any
          Personal Data Breach. Where necessary, StatMagic shall use reasonable efforts to provide
          further information on the Personal Data Breach to the Customer.
        </p>
      </section>

      <section>
        <h2>6. Cross-border transfers of personal data</h2>
        <p>
          <strong>6.1.</strong> The Customer authorises StatMagic to transfer and process Personal
          Data outside the EEA solely for the purposes of providing the Platform.
        </p>
        <p>
          <strong>6.2.</strong> Where such cross-border transfers occur, StatMagic may only process,
          or permit the processing, of the Personal Data outside the EEA under the following
          conditions:
        </p>
        <ol>
          <li>
            Personal Data is transferred to a territory which is deemed to provide an adequate level
            of protection for the privacy rights of individuals under Data Protection Legislation;
            or
          </li>
          <li>
            if StatMagic undertakes a Restricted Transfer, the parties shall enter into Standard
            Contractual Clauses to the extent required by Data Protection Legislation or carry out
            such other obligations as specified under Data Protection Legislation. The Standard
            Contractual Clauses apply, and are incorporated by reference into this DPA, where
            there is a Restricted Transfer.
          </li>
        </ol>
        <p>
          <strong>6.3.</strong> If the Customer consents to appointment by StatMagic of a
          Sub-processor located outside the EEA in compliance with the provisions of Clause 7,
          then the Customer authorises StatMagic to enter into SCCs with the Sub-processor in the
          Customer&apos;s name and on its behalf.
        </p>
      </section>

      <section>
        <h2>7. Sub-processors</h2>
        <p>
          <strong>7.1.</strong> The Customer authorises StatMagic to appoint third parties to meet
          obligations under this DPA and the Master Agreement (these third parties are referred to
          as &quot;Sub-processors&quot;). A list of Sub-processors is provided under Schedule A.
        </p>
        <p>
          <strong>7.2.</strong> StatMagic may at any time appoint a new Sub-processor or replace a
          Sub-processor on this list, provided that the Customer is given 10 (Ten) working
          days&apos; prior written notice and the Customer does not object to such changes within
          that timeframe. If the Customer objects, StatMagic shall use reasonable efforts to make
          available a change in the services rendered by such Sub-processor. If StatMagic is unable
          to make available such a change within a reasonable period of time, it may, by providing
          written notice to the Customer, terminate the DPA or the part of the services which cannot
          be provided without the use of the objected-to Sub-processor
        </p>
        <p>
          <strong>7.3.</strong> StatMagic shall enter into written agreements with each
          Sub-processor, containing data protection obligations that provide a similar level of
          protection for Personal Data as those covered in this DPA, to the extent applicable with
          respect to the nature of services provided by such Sub-processor.
        </p>
      </section>

      <section>
        <h2>8. Term and termination</h2>
        <p>
          <strong>8.1.</strong> This DPA will remain in full force and effect so long as:
        </p>
        <ol>
          <li>the Master Agreement remains in effect; or</li>
          <li>
            StatMagic retains any Personal Data related to the Master Agreement in its possession
            or control (&quot;Term&quot;).
          </li>
        </ol>
        <p>
          <strong>8.2.</strong> Termination or expiry of the DPA does not affect the survival of any
          provisions that are expressly or by implication intended to survive termination or expiry.
        </p>
        <p>
          <strong>8.3.</strong> If a change in any Data Protection Legislation prevents either party
          from fulfilling all or part of its Master Agreement obligations, the parties will suspend
          the processing of Personal Data until that processing complies with the new requirements.
          If the parties are unable to bring the Personal Data Processing into compliance with the
          Data Protection Legislation, they may amend the scope of or otherwise terminate the Master
          Agreement on written notice to the other party.
        </p>
      </section>

      <section>
        <h2>9. Data return and destruction</h2>
        <p>
          <strong>9.1.</strong> At the Customer&apos;s request, StatMagic will provide the Customer
          with a copy of or access to all or part of the Personal Data in its possession or control.
        </p>
        <p>
          <strong>9.2.</strong> On expiry or termination of the Master Agreement and upon the
          Customer&apos;s request, StatMagic will delete or destroy, to the extent technically
          possible, or, if directed in writing by the Customer, return and not retain, all or any
          Personal Data related to this DPA in its possession or control; provided, however, that
          this Clause shall not apply to any obligations of StatMagic to retain any information,
          documents, or materials in accordance with applicable laws.
        </p>
      </section>

      <section>
        <h2>10. Audit</h2>
        <p>
          <strong>10.1.</strong> During the Term, StatMagic will, in accordance with the Data
          Protection Legislation, provide the Customer with such information that is reasonably
          necessary to demonstrate StatMagic&apos;s compliance with its obligations under Article 28
          of the GDPR, and allow the Customer to audit such information, subject to the following:
        </p>
        <ol>
          <li>
            the Customer shall provide StatMagic with at least 30 (Thirty) days&apos; prior written
            notice of information requests or audits;
          </li>
          <li>
            the Customer and its authorised personnel shall undertake confidentiality obligations
            in a form and manner acceptable to StatMagic prior to such audit or their receipt of
            information; and
          </li>
          <li>
            the Customer shall reimburse StatMagic for any costs that it incurs to give effect to or
            enable the Customer&apos;s rights under this Clause.
          </li>
        </ol>
      </section>

      <section>
        <h2>11. Miscellaneous</h2>
        <p>
          <strong>11.1.</strong> Any notice or other communication given to a party under or in
          connection with this DPA must be in accordance with the provisions of the Master
          Agreement.
        </p>
        <p>
          <strong>11.2.</strong> This DPA shall be governed by the governing law and dispute
          resolution provisions of the Master Agreement.
        </p>
      </section>

      <section>
        <h2>Schedule A — Personal data processing index</h2>
        <p>
          <strong>(a) Subject Matter of Processing:</strong> StatMagic&apos;s provision of the
          Platform and Services. As further described in the Master Agreement, the purpose of the
          processing is to assist the Customer in recording or uploading video and audio of sporting
          events, either directly by the Customer or by StatMagic on the instructions of the
          Customer. The recordings are processed by the Platform to generate statistical analysis,
          insights, and performance metrics. The purpose also includes storing such recordings on
          the Platform, making them available live or on demand, and providing access to users
          invited by the Customer in accordance with the access rights and permissions determined
          by the Customer. The processing further supports the Customer in editing, analysing, and
          sharing recordings, generating highlights, and publishing statistics or insights on
          external websites and platforms (including social media channels) at the sole choice of
          the Customer.
        </p>
        <p>
          <strong>(b) Duration of Processing:</strong> Subject to this DPA, StatMagic shall process
          Personal Data for the duration the Customer accesses the Platform and uses the Services.
        </p>
        <p>
          <strong>(c) Nature of Processing:</strong> StatMagic processes Personal Data on the
          instructions of the Customer for the purposes of providing access to the Platform and
          Services. Such processing includes automated analysis of video and audio recordings,
          which may involve the identification or differentiation of individuals captured in such
          recordings for the purposes of generating performance metrics, statistics, and highlights.
        </p>
        <p>
          <strong>(d) Purpose:</strong> StatMagic processes Personal Data, including where applicable
          Special Category Data and Biometric Data, solely to comply with the Customer&apos;s
          instructions and to provide access to the Platform and Services. StatMagic does not
          process Biometric Data for any purpose beyond what is strictly necessary to provide the
          Services including enhancement of the Services and Platform.
        </p>
        <p>
          <strong>(e) Legal Basis for Special Category Data:</strong> The Customer warrants that
          explicit consent under Article 9(2)(a) of the GDPR has been obtained from all relevant
          Data Subjects prior to the processing of their Biometric Data by StatMagic, or that
          another valid condition under Article 9(2) of the GDPR has been identified and documented
          by the Customer prior to instructing StatMagic to process such data.
        </p>
        <p>
          <strong>(f) Personal Data Categories:</strong>
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[32rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-2 pr-4 text-left font-semibold text-foreground">Category</th>
                <th className="py-2 text-left font-semibold text-foreground">Details</th>
              </tr>
            </thead>
            <tbody className="[&_td]:align-top [&_tr]:border-b [&_tr]:border-border">
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Biometric Data</td>
                <td className="py-3">
                  Facial geometry, gait, body measurements, and movement signatures extracted from
                  video/audio recordings, processed for the purpose of individual identification or
                  differentiation in the context of sporting event analysis
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">
                  Video and audio recordings
                </td>
                <td className="py-3">
                  Footage of players, spectators, and officials at sporting events
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Player performance data</td>
                <td className="py-3">
                  Jersey number, position, statistics, performance metrics derived from recordings
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Player profile data</td>
                <td className="py-3">
                  Name, highlights selected by or attributed to the player
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Contact/identity data</td>
                <td className="py-3">
                  Name, email, telephone number, club association of admin and invited users
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Usage data</td>
                <td className="py-3">Platform access logs, permissions, user activity</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Published content</td>
                <td className="py-3">
                  Highlights, clips, and statistical snapshots shared externally at the
                  Customer&apos;s direction
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Spectator/official data</td>
                <td className="py-3">
                  Incidental capture of individuals present at recorded events
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>(g) Data Subject Types:</strong> (i) Players participating in sporting events for
          which the Customer has requested Services; (ii) Spectators; (iii) Employees or contact
          persons of the Customer; (iv) Users invited by the Customer in relation to the Platform.
        </p>
        <p>
          <strong>(h) Processing Note:</strong> The processing of Biometric Data and Special Category
          Data is performed solely on the instructions of the Customer and for the purpose of
          providing the Services. The Customer is solely responsible for ensuring that a valid
          legal basis exists for the processing of Biometric Data and Special Category Data in
          respect of each Data Subject, including obtaining explicit consent where required under
          Article 9(2)(a) of the GDPR. StatMagic shall not be liable for any failure by the
          Customer to fulfil this obligation, and the Customer shall indemnify StatMagic in
          accordance with Clause 2.3(b) of this DPA.
        </p>
        <p>
          <strong>List of Sub-processors:</strong>
        </p>
        <p>
          As provided by StatMagic on{" "}
          <Link href="/sub-processors" className={linkClass}>
            theplayernation.com/sub-processors
          </Link>
        </p>
      </section>

      <section>
        <h2>Schedule B — Security measures</h2>
        <p>
          StatMagic implements and maintains the security measures in this Schedule B. StatMagic may
          update these measures from time to time, provided that any update does not materially
          decrease the overall security of the Services.
        </p>
        <p>
          <strong>1. Encryption (in transit and at rest)</strong> StatMagic applies encryption
          appropriate to the risk, including (a) encryption in transit using TLS (or equivalent)
          for external network communications; and (b) encryption at rest for production databases
          and storage systems where Personal Data is stored, with encryption keys managed with
          appropriate access controls and separation of duties. Where encryption at rest is not
          technically feasible for a particular system component, StatMagic will apply compensating
          controls appropriate to the risk.
        </p>
        <p>
          <strong>2. Pseudonymisation / anonymisation (as applicable)</strong> Where feasible and
          appropriate to the nature of the Services, StatMagic implements measures to reduce
          identifiability of Personal Data, such as pseudonymising identifiers, separating datasets,
          masking/redacting fields in non-production environments, and using anonymised or synthetic
          datasets for testing and analytics. StatMagic will not represent that data is
          &quot;anonymous&quot; unless it has been anonymised in a manner that is reasonably
          expected to be irreversible in the context of the processing.
        </p>
        <p>
          <strong>3. Regional processing, data residency, and cross-border access</strong>{" "}
          StatMagic will process and store Personal Data in the regions used to provide the Services
          to the Customer (as selected by the Customer where such option is made available).
          StatMagic will (a) maintain an up-to-date list of its hosting locations/sub-processors as
          set out in Schedule A (or as otherwise notified); (b) restrict cross-border transfers and
          remote access to what is necessary for service delivery, support, security, and
          continuity; and (c) where a Restricted Transfer occurs, implement appropriate safeguards
          required under Data Protection Legislation (including SCCs where applicable) and apply
          supplementary security measures appropriate to the risk.
        </p>
        <p>
          <strong>4. Indicative implementation approach</strong> The measures in this Schedule B are
          implemented and maintained on a risk-based basis, having regard to the nature, scope,
          context and purposes of the processing, as well as the risks to the rights and freedoms
          of natural persons. Where a new environment, material change, or new sub-processor is
          introduced, StatMagic will assess the associated risks and implement appropriate technical
          and organisational measures proportionate to those risks, taking into account technical
          feasibility, cost of implementation, and industry standards. Where required by applicable
          law or by the Customer&apos;s documented instructions, the parties may agree to a more
          specific implementation plan in writing.
        </p>
        <p>
          <strong>5. Additional technical and organisational measures</strong> StatMagic also
          maintains (a) access control: least-privilege access, unique user IDs, MFA for
          administrative access where available, and periodic access reviews; (b) logging and
          monitoring: security logs for key systems and administrative actions, with alerting for
          anomalous activity where feasible; (c) backup and recovery: regular backups and tested
          restoration procedures to support availability and resilience; (d) vulnerability
          management: timely application of security patches and routine vulnerability scanning for
          internet-facing systems; (e) secure development and change control: separation of
          environments (as applicable), code review and controlled deployments; (f) physical and
          hosting security: use of reputable hosting providers with physical security controls; and
          (g) personnel and governance: confidentiality commitments for personnel, security
          awareness training, and incident
        </p>
      </section>
    </LegalPageLayout>
  );
}
