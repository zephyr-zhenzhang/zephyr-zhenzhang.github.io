// ===== Bilingual content dictionary =====
// en and zh must contain exactly the same keys; values may contain inline <b> tags.

const LANG = {
    en: {
        "page.title": "Zhen Zhang — Magnetic Medical Microrobotics",

        "nav.home": "Homepage",
        "nav.education": "Education",
        "nav.research": "Research",
        "nav.skills": "Skills",
        "nav.practice": "Practice",

        "sidebar.affiliation": "School of Artificial Intelligence, Nankai University",
        "sidebar.name": "Zhen Zhang",
        "sidebar.advisor.label": "Advisor",
        "sidebar.advisor.name": "Prof. Liu Yang",
        "sidebar.interest": "Magnetic Microrobots · Bioinspired Soft Robotics · Drug Delivery",
        "sidebar.location": "Tianjin, China",
        "sidebar.email": "2314100@mail.nankai.edu.cn",

        "sec.interest.title": "Research Interests",
        "interest.1": "Magnetic Microrobots",
        "interest.2": "Bioinspired Soft Robotics",
        "interest.3": "Drug Delivery",

        "sec.edu.title": "Education",
        "edu.school": "Nankai University, China · School of Artificial Intelligence · Intelligent Science and Technology (B.Eng.)",
        "edu.dates": "2023.09 – 2027.06",

        "sec.map.title": "Research Map",
        "map.hint": "🔍 Click the map to enlarge — highly recommended",

        "sec.research.title": "Research Experience",

        "label.rq": "Research Question",
        "label.contrib": "My Contributions",
        "label.methods": "Methods and Techniques",
        "label.results": "Results",

        "p1.index": "PROJECT 01",
        "p1.title": "Petal-inspired Magnetic Multilayer Flexible Robot for Gastric Applications",
        "p1.en": "A Petal-inspired Magnetic Multilayer Flexible Robot for Gastric Applications",
        "p1.role": "1st Author",
        "p1.top": "Published · <i>Proc. IEEE CBS 2025</i> (Oral), pp. 165–170 · <a href='https://doi.org/10.1109/CBS65871.2025.11267643'>DOI</a>",
        "p1.fig1": "Gastric application and multilayer structure",
        "p1.fig2": "Bioinspired folding and unfolding process",
        "p1.rq": "How can a gastric patch robot be compactly folded for capsule delivery and rapidly, completely deployed after release, while avoiding interlayer adhesion and achieving stable tissue attachment?",
        "p1.c1": "<b>Biomimetic structural design.</b> Inspired by the different petal arrangements found in nature, I compared overlapping configurations (e.g., lotus flowers) with the non-overlapping, side-by-side arrangement of bellflower petals. I translated the latter into a four-petal folding configuration, using the natural arrangement as a structural design principle for reliable folding and deployment.",
        "p1.c2": "<b>Multilayer structure design and fabrication.</b> Led the design and fabrication of a four-layer composite structure comprising a magnetic silicone layer, a drug-loading layer, a flexible magnetic silicone layer, and a chitosan nanofiber nonwoven adhesive layer. Contributed to material selection, multilayer integration, and through-thickness magnetization to achieve a compact, capsule-compatible folded configuration and reliable deployment.",
        "p1.methods": "Biomimetic configuration design; magnetic silicone composite preparation; multilayer material integration and fabrication; magnetic programming; capsule-compatible folding and deployment; magnetic manipulation and ex vivo tissue adhesion experiments.",
        "p1.results": "Achieved complete deployment in <b>4.0 ± 1.7 s</b> and stable ex vivo tissue adhesion for <b>2 h 20 min</b>. The 35 × 35 mm patch (1,052 mm²; 1.0 ± 0.1 mm thick) was designed to fit within a No. 000 capsule.",
        "p1.intro1": "Local treatment of gastric ulcers requires delivering therapeutic material to the lesion and forming a local barrier. Long-term use of proton-pump inhibitors to suppress acid may alter the gastric microbiota and mineral absorption, and rebound acid secretion can follow withdrawal. Magnetically actuated origami and soft robots can reconfigure their shape and be controlled wirelessly, yet the transition from folded to open is often incomplete or too slow: the folding pattern itself causes magnetic self-attraction, and the capsule may not have dissolved fully while mucosal folds constrain deployment.",
        "p1.intro2": "Inspired by bellflower buds, where petals sit side by side without overlapping, this work proposes a four-petal non-overlapping configuration: in the folded state the surfaces in contact come from the same face of the sheet, which removes interlayer magnetic self-attraction structurally. After unfolding, through-thickness magnetisation gives adjacent petals the same pole, so the force that used to hold the layers together becomes the driving force for opening. The robot consists of a magnetic silicone layer, a drug layer, a soft magnetic silicone layer and a chitosan nonwoven adhesive layer. It fits a size-000 capsule and, after release, completed unfolding, flipping, adhesion and dye diffusion on ex vivo tissue.",
        "p1.vid1": "Supplementary video 1 (CBS 2025)",
        "p1.vid2": "Supplementary video 2 (CBS 2025)",

        "p2.index": "PROJECT 02",
        "p2.title": "Effects of Surface Modification and Pose Optimization on Upstream Ability of an Untethered Magnetic Millirobot",
        "p2.en": "Effects of Surface Modification and Pose Optimization on Upstream Ability of an Untethered Magnetic Millirobot",
        "p2.role": "2nd Author",
        "p2.top": "Under review at <i>IEEE/ASME TMECH</i> (2026) · previously three rounds of review at <i>IEEE TIE</i>",
        "p2.fig1": "Magnetic actuation system and robot pose",
        "p2.fig2": "Surface micropillar structure and air layer",
        "p2.rq": "How do surface micro-protrusions reduce hydrodynamic drag and improve the upstream locomotion of an untethered magnetic millirobot, and what physical mechanisms account for this effect?",
        "p2.c1": "<b>Proposed two complementary drag-reduction mechanisms.</b> I developed two potentially coexisting explanations for the effects of surface protrusions: (1) a Cassie–Baxter-type composite interface, in which trapped air within the protrusions promotes interfacial slip and reduces near-wall shear resistance; and (2) a vortex-generator effect, in which protrusions introduce local vortices, transfer momentum toward the near-wall region, and delay boundary-layer separation.",
        "p2.c2": "<b>Designed a discriminative surface-wettability intervention.</b> To distinguish the contributions of these mechanisms, I designed a comparative experiment using oxygen plasma treatment to change surface wettability while retaining the original protrusion geometry. By converting the surface from hydrophobic to hydrophilic, the experiment tested whether suppressing the air-layer mechanism would reduce upstream performance while preserving the geometric contribution.",
        "p2.c3": "<b>Conducted comparative analysis and established the evidence boundary.</b> I compared upstream performance before and after treatment and interpreted the residual advantage over smooth surfaces as evidence that geometric effects may persist alongside interfacial effects. The results provide indirect support for the proposed mechanisms rather than direct visualization of a stable air film.",
        "p2.methods": "Oxygen plasma surface modification (60 W / 40 Pa / 50 s); contact-angle measurements and SEM characterization; wettability-controlled comparative experiments; static upstream ability (SUA) and dynamic upstream ability (DUA) tests using ex vivo porcine aorta models.",
        "p2.results": "Surface treatment reduced the contact angle from approximately <b>100° to 30°</b>. SUA decreased by <b>2.4%–9.7%</b>, while DUA decreased by <b>21.2%–32.1%</b>, yet performance remained above the smooth-surface baseline. These results support the possible coexistence of interfacial-slip and geometric effects, with interfacial effects appearing more influential under dynamic flow conditions.",
        "p2.intro1": "Cardiovascular intervention requires travelling against the flow from the access site to the lesion. Aortic velocity can exceed 400 mm/s, while the upstream ability of untethered robots remains far below that, which is one of the main reasons they have not entered clinical use. Existing studies mostly raise upstream speed through new locomotion modes and rarely address surface drag and pose together. This work adds cylindrical micropillars of 600 µm diameter, 100 µm height and 100 µm spacing to a symmetric streamlined robot and varies the tilt of the external driving magnet, evaluating static and dynamic upstream ability in vitro and in excised porcine aorta.",
        "p2.intro2": "Two mechanisms may coexist. The gaps between pillars may stabilise an air layer and form a solid–air–liquid interface (Cassie–Baxter state) that produces apparent slip; the pillars may also act as micro vortex generators that bring momentum from the mainstream into the near-wall region and delay boundary-layer separation. To separate the two, oxygen plasma was used to change the surface from hydrophobic to hydrophilic while preserving the geometry, giving a same-geometry, different-wettability control.",
        "p2.vid1": "Supplementary video (TMECH submission)",

        "p3.index": "PROJECT 03",
        "p3.title": "A Capsule Robot for In Situ Sampling and Study of Enteric Pathogens",
        "p3.en": "A Capsule Robot for In Situ Sampling and Study of Enteric Pathogens",
        "p3.role": "Sole Student Participant | Core Proposal Writer | Student Lead for Project Execution",
        "p3.top": "Funded by the <b>2026 Tianjin Major Science and Technology Project / National Key Laboratory Major Project</b> · <b>RMB 1.5 million</b> · Sept 2026 – Sept 2028",
        "p3.fig1": "Partner institutions: National Key Laboratory of Intelligent Tracking and Forecasting for Infectious Diseases, China CDC, Nankai University, Beijing Ditan Hospital",
        "p3.rq": "How can a capsule robot obtain location-specific, multimodal, and repeatable gastrointestinal samples while preserving the biological activity of pathogens, microbiota, cells, and tissue for infectious disease research?",
        "p3.c1": "<b>Preliminary research and clinical collaboration.</b> Conducted extensive literature research on gastrointestinal microbiome sampling and existing capsule technologies, and collaborated with clinicians at People’s Hospital to understand practical sampling requirements. Identified the importance of both longitudinal heterogeneity across gastrointestinal segments and transverse heterogeneity across the intestinal lumen, mucus layer, and epithelial surface. Translated clinical and biological needs into requirements for sample types, sampling locations, preservation, and repeatability.",
        "p3.c2": "<b>Developed the research rationale and proposal narrative.</b> Connected three major unmet needs: insufficient in situ sampling tools for studying pathogen mechanisms, diagnostic blind spots in conventional parasite detection, and the lack of spatially resolved microbiome data for disease susceptibility research. Analyzed the limitations of stool sampling and invasive endoscopy, together with existing capsule technologies, to establish the necessity of an integrated in situ sampling platform.",
        "p3.c3": "<b>Developed the research content and technical roadmap.</b> Organized the project around three core research modules: (1) integrated multimodal sampling of intestinal fluid, mucosal cells, and pathological tissue; (2) dynamic, reversible balloon-based intestinal retention and precise multi-segment localization for controlled retention and repeated sampling; and (3) in situ sample preservation and integrated dynamic/static sealing to maintain sample viability. In the preliminary strategy, I also developed a phased approach of <b>passive sampling first, followed by active localization and intervention</b>, progressively incorporating more precise segmentation, anchoring, and multisensor-assisted positioning.",
        "p3.methods": "Literature and patent review; clinical requirement analysis and consultation; comparative evaluation of passive and active sampling strategies; technical-route development for multimodal sampling, balloon retention, and precise localization; comparison of pH-based segmentation with image-assisted and multisensor approaches; project planning, milestone decomposition, and proposal writing.",
        "p3.results": "The project is ongoing; the proposed technical modules and performance targets are research objectives rather than completed experimental outcomes.",
        "p3.intro1": "Research, detection and prediction of enteric infectious disease all depend on intestinal samples that can support downstream analysis. Stool only reflects the microbiota mixed in the distal gut; endoscopic biopsy is invasive, difficult to reach the distal small intestine, and inconvenient to repeat at the same site. Microbial communities differ strongly both longitudinally (stomach to colon) and transversally (lumen, mucus layer, epithelium, crypt), so where, from which layer, and when a sample was taken matters as much as the sample itself.",
        "p3.intro2": "The project wraps sampling tools into the lab's existing capsule platform. The scheme has three modules: multimodal sampling (intestinal fluid enrichment, cell scraping, tissue micro-biopsy); a reversible balloon for residence and multi-segment localisation (targeting 8 or more segments within 10–30 min); and sample preservation with static and dynamic sealing. The route is passive-first, active-later: a stable, manufacturable version built from mature structures plus negative pressure, filter membranes and preservatives, followed by an active version advanced through a scout capsule plus a functional capsule.",
        "p4.index": "PROJECT 04",
        "p4.title": "A Dual-Janus Magnetically Actuated Soft Robotic Platform for Multi-Target Drug Release in the Stomach",
        "p4.en": "A Dual-Janus Magnetically Actuated Soft Robotic Platform for Multi-Target Drug Release in the Stomach",
        "p4.role": "1st Author",
        "p4.top": "Manuscript in preparation · target journals: <i>Advanced Functional Materials</i> / <i>Advanced Healthcare Materials</i> (no DOI yet)",
        "p4.fig1": "Micro/nano structure replication and surface treatment",
        "p4.fig2": "Multilayer structure and multi-target release in the stomach",
        "p4.rq": "How can a soft robotic platform actively transport different drug-loaded films to multiple gastric targets and release them sequentially, without restricting the drug-loading materials to the composition of the robot itself?",
        "p4.c1": "<b>Biomimetic micro/nanofabrication and materials engineering.</b> Developed a soft-lithography process to replicate the micro/nanostructure of lotus leaves onto magnetic PDMS substrates, followed by nanoparticle SiO₂ coating and low-surface-energy treatment to create a superhydrophobic backing layer. Prepared chitosan/PVA–berberine electrospun drug-loaded films and explored compatibility with different commercial mucoadhesive films, including chitosan nonwoven films and oral-ulcer patches.",
        "p4.c2": "<b>Dual-Janus robotic architecture and sequential-release mechanism.</b> Proposed a three-part, stacked dual-Janus architecture that decouples magnetic transportation from drug loading: a lotus-leaf-inspired Janus backing layer, one or multiple interchangeable Janus drug films, and a perforated magnetic PDMS clamping layer. The ultrathin magnetic outer shell (combined top and bottom thickness < 0.2 mm) mechanically retains the drug films while enabling magnetic locomotion and flipping. At each target, magnetic reorientation brings the adhesive face into contact with the tissue; subsequent flipping releases the outermost film when tissue adhesion exceeds the mechanical clamping force.",
        "p4.c3": "<b>Platform adaptability and multi-target operation.</b> Explored the compatibility of the same robotic carrier with different drug-film compositions, avoiding the need to redesign the entire robot for each payload. Further developed a revisiting and pressing operation to reinforce incomplete adhesion, as well as a separation strategy for occasional double-film release.",
        "p4.methods": "Soft lithography and lotus-leaf micro/nanostructure replication; nanoparticle SiO₂ coating and surface-energy modification; electrospinning of chitosan/PVA–berberine films; NdFeB–PDMS magnetic composite fabrication; oxygen-plasma bonding; multilayer mechanical clamping; COMSOL magnetic-field analysis; ex vivo porcine stomach experiments and endoscopic-view manipulation.",
        "p4.results": "Demonstrated compatibility with <b>three different drug-film types</b> and ex vivo sequential release across <b>three target sites</b> using the same robotic platform. Demonstrated revisiting and pressing for improved film adhesion, together with separation of occasional double-film release.",
        "p4.intro1": "The first project showed that a magnetic soft robot can move, unfold and adhere inside the stomach, but a single patch treats one location at a time. Releasing different drugs at multiple targets requires repeated release, active localisation and replaceable drug carriers. Materials research already offers sustained release, multi-stage release and tissue adhesion, yet lacks a carrier that can deliver them to a chosen site and keep operating after release; most gastric adhesive robots release only once, and their drug form is constrained by the body material.",
        "p4.intro2": "This work proposes a dual-Janus platform that decouples carrier from cargo: a magnetic PDMS shell handles locomotion, flipping and clamping, while drug films serve as replaceable consumables. The platform consists of a superhydrophobic lotus backing, one or more Janus drug films, and a perforated magnetic clamping layer. The shell is under 0.2 mm in total top and bottom thickness, made of 70% NdFeB-doped PDMS bonded by oxygen plasma at 45 W for 50 s. At a target the robot flips so that the adhesive face of the outermost film meets tissue; flipping again lets tissue adhesion exceed the clamping force, the film detaches, and the robot carries the remaining films to the next target.",
        "sec.skills.title": "Research Skills",
        "sk1.t": "Robot design",
        "sk1.d": "Magnetically actuated soft robots, fold–unfold structures, multilayer composites and capsule integration; petal-inspired non-overlapping folding; dual-Janus three-layer clamping and film-by-film release.",
        "sk2.t": "Materials and process",
        "sk2.d": "PDMS / NdFeB magnetic composites; electrospinning (chitosan/PVA); chitosan nonwoven and commercial patches; soft-lithography replication of lotus micro/nano structures; nano-SiO₂ low-surface-energy treatment; oxygen plasma surface modification.",
        "sk3.t": "Simulation and modelling",
        "sk3.d": "COMSOL magnetic field and flow-resistance simulation; unfolding torque criterion and dimensionless margin analysis; magnetisation patterns (spherical magnet, five-pointed star) and workspace evaluation.",
        "sk4.t": "Experimental methods",
        "sk4.d": "Ex vivo porcine stomach, intestine and aorta experiments; contact angle and SEM characterisation; dye diffusion tracing; endoscopic-view release and pill pick-up and transport; same-geometry, different-wettability plasma controls.",
        "sk5.t": "Writing and proposals",
        "sk5.d": "First-author conference paper and oral presentation; sole authorship of a RMB 1.5 million proposal; figure-chain organisation and submission strategy; English technical writing.",

        "sec.practice.title": "Projects & Practice",

        "grp.proj": "Projects & Competitions",
        "grp.intern": "Internships",
        "grp.campus": "Campus & Service",

        "pr1.t": "Pingxiaomi: a business-optimisation agent for micro-merchants",
        "pr1.date": "2025 – 2026",
        "pr1.role": "National AI Application Scenario Innovation Challenge, General AI track · National Second Prize · Project lead",
        "pr1.d": "Micro-merchants’ operating data is undervalued, while agency operation through Taobao Qianniu is expensive. The project builds a business-optimisation agent on knowledge augmentation and multimodal perception: an expert knowledge base plus a “fuzzy reasoning + heuristic” guidance chain yields an explainable, closed-loop value-analysis model, and I coordinated the technical, design and business workstreams and set requirement priorities. The demo was delivered to a senior advisor at Kearney China; within the same window, comment collection ran about 120% more efficiently than that of the other interns; the proposal was selected among Tencent Philanthropy’s national top 500 and was commended by the deputy secretary-general of the Chinese Association for Artificial Intelligence. The same project received an “AI for public good” award at LIGHT Camp 2026, organised by the China Youth Entrepreneurship and Employment Foundation, Tencent SSV and the Tencent Charity Foundation (advisors: Prof. Liang Sai and Prof. Liu Jie).",
        "pr2.t": "Alibaba LLM Winter Camp",
        "pr2.date": "2025.01 – 2025.02",
        "pr2.d": "Reproduced a travel question-answering and recommendation agent, with responsibility for the technical reproduction.",
        "pr3.t": "ByteDance · Doubao LLM",
        "pr3.date": "2025.03 – 2025.06",
        "pr3.d": "Worked on Instruction Tuning data production for the Doubao model: optimised chain-of-thought rationales against the source questions, ran quality checks, and contributed to trajectory data construction for game scenarios.",
        "pr4.t": "Wildlife image analysis, Nankai “Hundred Projects” undergraduate innovation programme",
        "pr4.d": "Designed and deployed a YOLOv5-based wildlife image recognition system in the open-source community, led the deployment and wrote the concluding paper, proposing a “data analysis + ecology research” approach.",

        "in1.t": "Deloitte Consulting · FAW-Toyota digitalisation programme",
        "in1.date": "2026.01 – 2026.03",
        "in1.role": "Product intern (dealer management DMS / sales CRM)",
        "in1.d": "Lead-flow redesign: enumerated all eight scenarios, separated reusable processes from indivisible requirements, located the P0 gaps and delivered a User Story → flow chart → prototype → PRD three-stage design. Smart badge (SaaS integration): confirmed each data-return capability with the vendor and embedded the page into the 4S-store sales routine. Figma Make rollout: wrote a standard operating procedure from zero and drove AI adoption in team prototyping to 90%, then trained the whole team; agreed an “AI-Coding-readable PRD” standard with engineering and rebuilt the product documentation norms. Also designed the front-line acceptance survey, interviewed 4S-store management and benchmarked metrics across carmakers.",
        "in2.t": "A.T. Kearney · Part-time assistant",
        "in2.date": "2025.07 – present",
        "in2.d": "Analysed the financial statements of listed rental-housing companies (Beike, Ziroom, Xiangyu and others) for longitudinal trends and cross-company comparison; combined user reviews with Excel modelling and visualisation to build a social-listening model. Built a “screenshot + OCR + multiple LLM roles” workflow that turns Douyin and Xiaohongshu comments into an Excel visual report in one step, raising data-processing efficiency by about 120% relative to other interns.",
        "in3.t": "2025 SCO Summit · CCTV supplier",
        "in3.date": "2025.08 – 2025.09",
        "in3.role": "Assistant engineer",
        "in3.d": "Learned signal acquisition and live-streaming technology within a short period and applied it immediately on the front line; coordinated the MCR control room and network teams, resolved wired and wireless streaming problems, and supported six foreign media organisations through the recording and streaming tasks.",

        "cv1.t": "Campus ambassador, EY · Unilever · Baidu",
        "cv1.date": "2024.06 – 2025.06",
        "cv1.d": "EY 2024–2025 campus ambassador, named a “Navigator” outstanding ambassador (only four nationwide), member of the EY autumn-recruitment design core team, with a recommendation letter from the EY Greater China HR head; Unilever campus ambassador (Xiaohongshu content planning), Zhihu campus ambassador, Baidu and Alibaba Taotian campus ambassador. Ran a 400+ member Nankai–EY community across eight schools; Xiaohongshu content reached 100k+ reads with 200+ direct enquiries and 220+ new followers, and I supported the autumn recruitment fair, information sessions and job fairs.",
        "cv2.t": "Nankai University Publicity Department · Deputy head, video division",
        "cv2.date": "2024.06 – 2025.06",
        "cv2.d": "Ran content planning and end-to-end production for Nankai’s official short-video accounts, accumulating 10k+ likes; co-planned the news-correspondent training programme and wrote the coverage; took part in the university anthem MV shoot.",
        "cv3.t": "Nankai Ecological Mathematics Research Centre · Core member",
        "cv3.date": "2023.09 – 2025.04",
        "cv3.d": "Led proposals for six practice sites, worked with five institutions and organised five public lectures for over 100 ecology practitioners; with Beijing XinzhiGan Technology, researched the Yunnan snub-nosed monkey reserve and local communities and wrote a 13,500-character field report. Outcomes include the Social Welfare Scholarship (top 2%), a university-level Top Ten Team, a Tianjin summer social-practice commended team and selection for the national Green Long March expedition.",
        "cv4.t": "Photography, video and content operations",
        "cv4.d": "Member of the photography and drone association; excellence award at the “Light in the Lens · Nankai Vision” annual photography competition, second and third prizes at the 25th Nankai Light competition and third prize in the VIVO Tianjin university photography league; ran the WeChat accounts of the Xinjiang Library, Nankai graduate education and Nankai sports venues. A plateau ecology documentary I helped produce was shortlisted for the China Documentary Academy Award.",

        "ph1": "Publicity Department media centre recruitment",
        "ph2": "Douyin campus open day",
        "ph3": "National AI Application Scenario Innovation Challenge, defence",
        "ph4": "EY Tower, campus ambassador programme",
        "ph5": "Unilever campus ambassador visit",
        "ph6": "SCO Tianjin Summit media centre",

        "footer.note": "Last updated November 2026."
    },

    zh: {
        "page.title": "张甄 — 磁控医疗微型机器人",

        "nav.home": "首页",
        "nav.education": "教育背景",
        "nav.research": "科研经历",
        "nav.skills": "研究技能",
        "nav.practice": "实践",

        "sidebar.affiliation": "南开大学人工智能学院",
        "sidebar.name": "张甄",
        "sidebar.advisor.label": "导师",
        "sidebar.advisor.name": "杨柳 教授",
        "sidebar.interest": "磁性微型机器人 · 仿生软体机器人 · 药物递送",
        "sidebar.location": "天津 · 中国",
        "sidebar.email": "2314100@mail.nankai.edu.cn",

        "sec.interest.title": "研究兴趣",
        "interest.1": "磁性微型机器人",
        "interest.2": "仿生软体机器人",
        "interest.3": "药物递送",

        "sec.edu.title": "教育背景",
        "edu.school": "中国南开大学 · 人工智能学院 · 智能科学与技术（本科）",
        "edu.dates": "2023.09 – 2027.06",

        "sec.map.title": "研究地图",
        "map.hint": "🔍 点击地图可放大查看 · 强烈推荐",

        "sec.research.title": "科研经历",

        "label.rq": "研究问题",
        "label.contrib": "个人贡献",
        "label.methods": "方法与技术",
        "label.results": "研究结果",

        "p1.index": "项目 01",
        "p1.title": "花瓣仿生磁控多层柔性胃部机器人",
        "p1.en": "A Petal-inspired Magnetic Multilayer Flexible Robot for Gastric Applications",
        "p1.role": "第一作者",
        "p1.top": "已发表于 <i>Proc. IEEE CBS 2025</i>（Oral），第 165–170 页 · <a href='https://doi.org/10.1109/CBS65871.2025.11267643'>DOI</a>",
        "p1.fig1": "胃部应用与多层结构",
        "p1.fig2": "花瓣仿生折叠—展开过程",
        "p1.rq": "如何使胃部贴片机器人能够在有限胶囊空间内折叠收纳，并在释放后快速、完全展开，同时避免层间相互吸附，实现对胃壁组织的稳定黏附？",
        "p1.c1": "<b>仿生构型设计。</b> 从自然花朵不同的花瓣排列方式中寻找结构灵感，对比荷花等花瓣相互重叠的排列方式，以及风铃草花苞中花瓣并排、相互不重叠的排列方式。将后者抽象为四瓣式可折叠结构，把自然花瓣的排列关系转化为机器人可靠折叠与展开的结构设计原则。",
        "p1.c2": "<b>多层结构设计与制备。</b> 负责四层复合结构的设计与制备，包括磁性硅胶层、载药层、柔性磁性硅胶层和壳聚糖纤维无纺布黏附层。参与材料组合、层间结构集成及沿厚度方向的磁化设计，实现适合胶囊收纳的紧凑折叠结构与可靠展开。",
        "p1.methods": "仿生构型设计；磁性硅胶复合材料制备；多层材料集成与制备；磁化编程；胶囊适配性折叠与展开；磁控运动及离体组织黏附实验。",
        "p1.results": "实现 <b>4.0 ± 1.7 s</b> 完全展开，离体组织稳定黏附时间达到 <b>2 h 20 min</b>。贴片尺寸为 35 × 35 mm（面积 1,052 mm²，厚度 1.0 ± 0.1 mm），可收纳于 000 号胶囊。",
        "p1.intro1": "胃溃疡的局部治疗需要把治疗材料送到病灶并在局部形成保护。长期使用质子泵抑制剂抑酸，可能改变胃内菌群与矿物质吸收，并在停药后出现反酸。磁控折纸/软体机器人具备形态重构与无线操控能力，但从折叠到展开常出现展开不完全或过慢：一是折叠方式本身造成磁性部件自吸引，二是胶囊尚未充分溶解、胃黏膜褶皱等环境约束。",
        "p1.intro2": "受风铃草花苞中花瓣并排、不重叠的排列启发，本工作提出一种四瓣非重叠折叠构型：折叠时让同源表面相互接触，从结构上消除层间磁自吸引；展开后沿厚度方向磁化，使相邻花瓣同极相斥，把原本导致“吸住”的磁力改造成展开驱动力。机器人由磁性硅胶层、载药层、柔性磁性硅胶层和壳聚糖纤维无纺布黏附层组成，可装入 000 号胶囊，释放后在离体组织上完成展开、翻转、贴附与染料扩散验证。",
        "p1.vid1": "补充视频 1（CBS 2025）",
        "p1.vid2": "补充视频 2（CBS 2025）",

        "p2.index": "项目 02",
        "p2.title": "表面改性与姿态优化：无系留磁控微型机器人逆流运动能力研究",
        "p2.en": "Effects of Surface Modification and Pose Optimization on Upstream Ability of an Untethered Magnetic Millirobot",
        "p2.role": "第二作者",
        "p2.top": "IEEE/ASME TMECH 审稿中（2026）· 此前 IEEE TIE 三轮审稿",
        "p2.fig1": "磁驱系统与机器人姿态",
        "p2.fig2": "表面微凸起结构与空气层",
        "p2.rq": "机器人表面的微凸起为何能够降低流体阻力、提升无系留磁控微型机器人的逆流运动能力？其背后的物理机制是什么？",
        "p2.c1": "<b>提出两种并存的减阻机制假设。</b> 针对表面微凸起的减阻作用，提出两种可能同时存在的物理机制：（1）Cassie–Baxter 型界面滑移机制：凸起间隙中稳定的空气层形成固–气–液复合界面，产生界面滑移并降低近壁剪切阻力；（2）微型涡流发生器机制：凸起改变近壁流场，将主流区动量传递至近壁区域，并延迟边界层分离。",
        "p2.c2": "<b>设计具有机制区分能力的润湿性干预实验。</b> 为区分两种机制的贡献，提出利用氧等离子体处理改变表面润湿性，同时尽可能保留原有微凸起几何形貌。通过将表面由疏水转变为亲水，考察空气层难以稳定存在时机器人的逆流能力变化，从而判断界面效应与几何效应的相对作用。",
        "p2.c3": "<b>开展定量对照与证据边界分析。</b> 对比表面处理前后的逆流性能，并结合处理后仍高于光滑表面的残余优势，分析几何结构可能保留的减阻贡献。明确实验提供的是对空气层界面滑移机制的间接支持，而非对稳定空气膜的直接成像证明。",
        "p2.methods": "氧等离子体表面改性（60 W / 40 Pa / 50 s）；接触角测量与 SEM 表征；润湿性干预对照实验；基于离体猪主动脉模型的静态逆流能力（SUA）与动态逆流能力（DUA）测试。",
        "p2.results": "表面处理后接触角由约 <b>100° 降至 30°</b>。SUA 下降 <b>2.4%–9.7%</b>，DUA 下降 <b>21.2%–32.1%</b>，但处理后性能仍优于光滑表面。结果支持界面滑移与几何效应可能并存，其中动态流动条件下的界面效应表现得更为显著。",
        "p2.intro1": "心血管介入需要从入路逆血流把导丝、导管或机器人送到病灶，主动脉流速可能超过 400 mm/s，而无系留机器人的逆流能力仍有明显差距，这是其难以进入临床的主要原因之一。已有研究多通过运动模式创新提高逆流速度，但很少同时处理表面阻力与姿态。本工作在对称流线型机器人表面增加直径 600 μm、高 100 μm、间距 100 μm 的柱状微凸起，并调节外部驱动磁体倾角，在体外与离体猪主动脉中评估静态与动态逆流能力。",
        "p2.intro2": "机制上存在两条并存解释：微凸起间隙可能稳定空气层，形成固—气—液复合界面（Cassie–Baxter 态），产生表观滑移；微凸起也可能作为微型涡流发生器，把主流区动能带入近壁区，延迟边界层分离。为区分两者，本工作用氧等离子体在尽量保留几何形貌的前提下把表面由疏水改为亲水，做“同几何、异润湿”的对照。",
        "p2.vid1": "补充视频（TMECH 投稿）",

        "p3.index": "项目 03",
        "p3.title": "面向传染病病原体原位采样和研究的胶囊机器人",
        "p3.en": "A Capsule Robot for In Situ Sampling and Study of Enteric Pathogens",
        "p3.role": "唯一学生参与者｜申报书核心执笔｜项目执行学生负责人",
        "p3.top": "获批 <b>2026 年度天津市科技重大专项与工程 / 全国重点实验室重大专项</b> · 总经费 <b>150 万元</b> · 实施期 2026.09–2028.09",
        "p3.fig1": "项目相关机构：传染病溯源预警与智能决策全国重点实验室、中国疾控中心、南开大学、北京地坛医院",
        "p3.rq": "如何通过胶囊机器人实现消化道内具有明确位置、时间和组织层次信息的多模态、可重复采样，同时维持病原体、菌群、细胞及组织样本的生物活性？",
        "p3.c1": "<b>前期调研与临床需求对接。</b> 系统开展肠道菌群采样及现有胶囊机器人技术调研，并与人民医院临床团队合作，梳理实际采样需求。重点关注肠道菌群沿胃肠道不同区段的纵向异质性，以及肠腔、黏液层和上皮表面等不同微环境的横向异质性，将临床与生物学需求转化为样本类型、采样位置、保存和重复采样等具体技术要求。",
        "p3.c2": "<b>构建项目研究背景与立项逻辑。</b> 将三个核心需求组织成完整的研究叙事：传染病病原体致病机制研究缺乏原位采样工具、传统寄生虫检测存在诊断盲区，以及传染病易感性预测缺少肠道菌群空间异质性数据。系统分析粪便采样、侵入性内镜及现有胶囊采样技术的局限，论证建立一体化原位采样平台的必要性。",
        "p3.c3": "<b>设计研究内容与技术路线。</b> 将项目组织为三个核心研究模块：（1）设计多模态采样机构，实现肠液富集、黏膜细胞刮取与病理组织活检的集成；（2）研发动态可逆气囊驻留与多段精准定位技术，实现目标肠段可控驻留及多时相重复采样；（3）研发采样仓微环境保活与动静密封技术，维持病原体、菌群、细胞和组织样本的活性。在前期研究策略中，进一步提出<b>被动采样优先、主动定位与干预逐步引入</b>的阶段性推进思路，逐步解决精细肠道分段、定点锚定和同位置重复采样问题。",
        "p3.methods": "文献与专利调研；临床需求分析与合作对接；被动与主动采样策略比较；多模态采样、气囊驻留及精准定位技术路线设计；pH 分段与图像辅助、多传感器定位方案比较；项目任务分解、进度规划与申报书撰写。",
        "p3.results": "项目正在实施中，相关技术模块与性能指标属于项目研究目标，并非已经全部完成的实验成果。",
        "p3.intro1": "消化道传染病研究、检测与预测的前提，是拿到能支持下游分析的肠道样本。粪便只反映远端肠道混合后的菌群；内镜活检侵入性强、难以到达小肠远端，也不便在同一位置反复采样。菌群在纵向上（胃→结肠）与横向上（肠腔、黏液层、上皮、隐窝）均存在显著异质性，因此“样本来自哪里、哪一层、什么时间”与样本本身同样重要。",
        "p3.intro2": "本项目把采样工具装进团队已有的胶囊平台。方案含三个模块：多模态采样（肠液富集、细胞刮取、组织微活检）；动态可逆气囊驻留与多段定位（目标 ≥ 8 段，10–30 min）；样本保活与动静密封。路线为“被动优先、主动后置”：先用成熟结构叠加负压、滤膜与保存剂做稳定可量产版，再以“探路胶囊 + 功能胶囊”推进主动版。",

        "p4.index": "项目 04",
        "p4.title": "双 Janus 磁控软体机器人平台：胃内多靶点释药",
        "p4.en": "A Dual-Janus Magnetically Actuated Soft Robotic Platform for Multi-Target Drug Release in the Stomach",
        "p4.role": "第一作者",
        "p4.top": "论文筹备中 · 目标期刊：<i>Advanced Functional Materials</i> / <i>Advanced Healthcare Materials</i>（暂无 DOI）",
        "p4.fig1": "微纳结构复制与表面处理",
        "p4.fig2": "多层结构及胃内多靶点释药",
        "p4.rq": "如何构建一种能够主动运载不同载药材料、在胃内多个靶点实现依次释放的软体机器人平台，同时避免载药材料受到机器人本体材料组成的限制？",
        "p4.c1": "<b>仿生微纳加工与材料化学。</b> 采用软光刻技术，将荷叶表面的微纳结构复刻至磁性 PDMS 基底，并通过纳米 SiO₂ 喷涂与低表面能处理，制备具有超疏水特性的仿生背衬层。自主制备壳聚糖/PVA–小檗碱静电纺丝载药膜，并探索与不同商用黏附载药材料的兼容性，包括壳聚糖无纺布及口腔溃疡贴膜。",
        "p4.c2": "<b>双 Janus 机器人结构与逐张释放机制设计。</b> 提出运载与载药解耦的三部分叠层结构：底部为荷叶仿生 Janus 背衬层，中间为一张或多张可替换、可叠放的 Janus 载药膜，顶部为带有开孔的磁性 PDMS 机械夹持层。通过超薄磁性外壳（顶底两层总厚度小于 0.2 mm）对载药膜进行机械钳制，同时提供磁控运动和翻转能力。机器人到达靶点后，通过磁场翻转使载药膜黏附面接触组织；再次翻转后，当组织黏附力超过机械夹持力时，最外层载药膜脱离，实现逐张释放。",
        "p4.c3": "<b>平台适配性与多靶点操作。</b> 探索同一机器人载体对不同载药膜材料和组成的兼容性，避免每更换一种药物就需要重新设计整个机器人。同时，针对贴附不完全和偶发双张释放问题，设计回访补压操作以加强药膜黏附，并探索双张药膜分离机制。",
        "p4.methods": "软光刻及荷叶微纳结构复刻；纳米 SiO₂ 喷涂与表面能调控；壳聚糖/PVA–小檗碱静电纺丝；NdFeB–PDMS 磁性复合材料制备；氧等离子体键合；多层机械夹持结构设计；COMSOL 磁场分析；离体猪胃实验与内镜视角磁控操作。",
        "p4.results": "完成 <b>三种不同载药膜材料</b>的适配探索，并在离体胃部实验中实现同一机器人平台对 <b>三个靶点的序贯释药</b>。进一步实现对贴附不完全药膜的回访补压，以及偶发双张释放情况下的分离操作。",
        "p4.intro1": "第一项工作证明磁控软体机器人可完成胃内运动、展开与贴附，但单个贴片一次只能处理一个位置；多靶点释放不同药物，要求机器人同时具备多次释放、主动定位与可替换载药材料的能力。材料侧已有大量缓释、多时序释放与组织黏附方案，却缺少能把它们主动送到指定位置、并在释放后继续操作的运载工具；现有胃内贴附机器人多数只能单次释放，载药形态也受本体材料限制。",
        "p4.intro2": "本工作提出“运载—载药解耦”的双 Janus 平台：磁性 PDMS 外壳负责运动、翻转与夹持，药膜作为可替换耗材。平台由超疏水荷叶背衬、一张或多张 Janus 药膜、带开孔的磁性夹持层组成；外壳顶底总厚 &lt; 0.2 mm，采用 70% NdFeB 掺杂 PDMS，经 45 W / 50 s 氧等离子体键合。到达靶点后翻转，使药膜黏附面接触组织；再次翻转，让组织黏附力超过夹持力，最外层药膜脱落，机器人携带剩余药膜前往下一靶点。",

        "sec.skills.title": "研究技能",
        "sk1.t": "机器人设计",
        "sk1.d": "磁控软体机器人、折叠/展开结构、多层复合与胶囊集成；花瓣仿生与非重叠折叠构型；双 Janus 三层夹持与逐张释放机构。",
        "sk2.t": "材料与工艺",
        "sk2.d": "PDMS / NdFeB 磁性复合；静电纺丝（壳聚糖/PVA）；壳聚糖无纺布与商用贴膜；软光刻复刻荷叶微纳结构；纳米 SiO₂ 低表面能处理；氧等离子体表面改性。",
        "sk3.t": "仿真与建模",
        "sk3.d": "COMSOL 磁场与流阻仿真；展开力矩判据与无量纲裕度分析；磁化图案（球形磁体、五角星）与工作空间评估。",
        "sk4.t": "实验方法",
        "sk4.d": "离体猪胃/肠与猪主动脉实验；接触角与 SEM 表征；染料扩散示踪；内镜视角释放与药丸抓取—搬运；氧等离子体“同几何、异润湿”对照。",
        "sk5.t": "写作与申报",
        "sk5.d": "第一作者会议论文与 Oral；150 万元项目申报书独立执笔；论文图表链组织与投稿策略；英文科技写作。",

        "sec.practice.title": "项目与实践",

        "grp.proj": "项目与竞赛",
        "grp.intern": "商业实习",
        "grp.campus": "校园与活动",

        "pr1.t": "评小秘：基于知识增强与多模态技术的小微商户经营优化智能体",
        "pr1.date": "2025 – 2026",
        "pr1.role": "全国人工智能应用场景创新挑战赛 · 通用人工智能二等奖 · 项目负责人",
        "pr1.d": "针对小微商户经营数据价值被低估、传统淘宝千牛代运营成本高的痛点，提出基于知识增强与多模态技术的商户经营优化智能体：以专家知识库与“模糊推理 + 启发函数”引导链路，输出可解释、可闭环的价值分析模型；统筹技术、设计与商业模块，拆解需求优先级。DEMO 送至科尔尼-中国高级咨询顾问，同一时间窗口内评论采集效率较同批实习生提升约 120%；方案入选腾讯公益全国 500 强，并获中国人工智能学会副秘书长余有成肯定。同一项目获 LIGHT 创造营 2026“AI 公益创想项目”（中国青年创业就业基金会、腾讯可持续社会价值事业部、腾讯公益慈善基金会共同主办；指导教师：梁赛教授、刘杰教授）。",
        "pr2.t": "阿里巴巴大模型冬季训练营",
        "pr2.date": "2025.01 – 2025.02",
        "pr2.d": "复现旅游问答与推荐智能体，主要负责技术复现。",
        "pr3.t": "字节跳动 · 豆包大模型",
        "pr3.date": "2025.03 – 2025.06",
        "pr3.d": "参与豆包大模型 Instruction Tuning 数据生产，负责基于题目的思维链（CoT）优化与质量校验，并参与游戏场景下的轨迹数据构建。",
        "pr4.t": "野生动物图像智能分析（南开大学“百项”创新项目）",
        "pr4.d": "设计并在开源社区部署基于 YOLOv5 的野生动物图像识别系统，主导开源平台部署并撰写结题论文，提出“数据分析 + 生态研究”的创新方案。",

        "in1.t": "德勤咨询 · 一汽丰田数字化项目",
        "in1.date": "2026.01 – 2026.03",
        "in1.role": "产品实习生（经销商管理 DMS / 销售 CRM）",
        "in1.d": "线索流转重构：枚举全部 8 种场景，拆分可复用流程与不可再拆需求，定位 P0 级核心缺口，输出 User Story → 流程图 → 原型 → PRD 的三段式方案。智能工牌（SaaS 集成）：与供应商逐条确认回传能力，按 4S 店销售真实习惯嵌入页面。主导 Figma Make 落地：0 基础自研标准化 SOP，驱动团队原型设计 AI 迁移率达 90%，并负责全员技术内训；与开发协定“AI Coding 可读 PRD”标准，重构产品文档规范。另完成工牌一线接受度问卷、4S 店管理层需求访谈与多车企指标体系对标。",
        "in2.t": "科尔尼咨询（A.T. Kearney）· PTA",
        "in2.date": "2025.07 – 至今",
        "in2.d": "基于贝壳、自如、相寓等上市租房企业财报数据开展纵向趋势与横向对比，结合用户评论，用 Excel 建模与可视化构建 Social Listening 模型；搭建“截图 + OCR 引擎 + 多种大模型分工”工作流，实现抖音、小红书“评论 → Excel 可视化报告”一键生成，数据处理效率较其他实习生提高约 120%。",
        "in3.t": "2025 上海合作组织峰会 · 央视供应商",
        "in3.date": "2025.08 – 2025.09",
        "in3.role": "助理工程师",
        "in3.d": "短期学习信号收录与直播推流技术并即时投入一线支持，协调 MCR 主控室与网络等部门，解决有线与无线推流问题，保障 6 国外媒收录推流任务顺利完成。",

        "cv1.t": "校园大使：安永 · 联合利华 · 百度",
        "cv1.date": "2024.06 – 2025.06",
        "cv1.d": "安永 2024–2025 年度校园大使，“领航先锋”杰出校园大使（全国仅 4 位），入选安永秋招设计核心团队，获大中华区人力资源负责人推荐信；联合利华校园大使（小红书内容策划）、知乎校园代言人、百度与阿里淘天集团校园大使。主理南开 & 安永 400+ 成员社群，覆盖 8 个学院；小红书总阅读 10w+、200+ 人私信咨询、涨粉 220+，并协助秋招会、宣讲会与招聘会。",
        "cv2.t": "南开大学宣传部 · 视频部副部长",
        "cv2.date": "2024.06 – 2025.06",
        "cv2.d": "负责南开大学官方短视频平台的内容策划与全流程制作，累计点赞 1w+；参与策划新闻通讯员能力提升专题培训并撰写新闻稿；参与校歌 MV 拍摄。",
        "cv3.t": "南开大学生态数学研究中心 · 核心成员",
        "cv3.date": "2023.09 – 2025.04",
        "cv3.d": "主导 6 个实践地方案、对接 5 所机构、组织 5 场科普讲座（覆盖 100+ 生态工作者）；与北京新智感科技合作，深入滇金丝猴保护区科研机构与社区调研，撰写 13500 字调研报告。成果包括社会公益奖学金（比例 2%）、校级十佳团队、天津市“三下乡”表彰团队，并入选全国绿色长征科考项目。",
        "cv4.t": "摄影、影像与内容运营",
        "cv4.d": "摄影与无人机协会成员；“镜中光影·南开视界”年度摄影大赛优秀奖、第 25 届南开之光摄影比赛二等奖与三等奖、VIVO 天津高校摄影联盟三等奖；担任新疆图书馆、南开大学研究生教育、南开大学体育场馆公众号负责人；参与制作的高原生态纪录片入围中国纪录片学院奖。",

        "ph1": "宣传部融媒体中心 · 视频部纳新",
        "ph2": "抖音俱乐部校园开放日",
        "ph3": "全国人工智能应用场景创新挑战赛 · 答辩现场",
        "ph4": "安永大楼 · 校园大使项目",
        "ph5": "联合利华 · 校园大使参访",
        "ph6": "上海合作组织天津峰会 · 新闻中心",

        "footer.note": "最后更新于 2026 年 11 月。"
    }
};

function applyLang(lang) {
    const dict = LANG[lang];
    if (!dict) return;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    if (dict["page.title"]) document.title = dict["page.title"];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        const key = el.getAttribute("data-i18n");
        const value = dict[key];
        if (typeof value === "string") {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

function initLang() {
    applyLang("en");
}

function initMapLightbox() {
    const links = document.querySelectorAll(".research-map a[data-lightbox]");
    if (!links.length) return;

    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    const img = document.createElement("img");
    overlay.appendChild(img);
    document.body.appendChild(overlay);

    function close() {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            img.src = link.getAttribute("href");
            img.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
            overlay.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    overlay.addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initMapLightbox();
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
            applyLang(btn.dataset.lang);
        });
    });
});
