import { NavigationHeader } from "@/components/NavigationHeader";
import React from "react";

const villageStats = [
  { label: "Total Population", value: "1,464", color: "text-orange-500", icon: "👥" },
  { label: "Households", value: "279", color: "text-sky-500", icon: "🏠" },
  { label: "Literacy Rate", value: "83.23%", color: "text-orange-500", icon: "🏫" },
  { label: "Health Centers", value: "3", color: "text-sky-500", icon: "💙" },
];

const tableData = {
  en: [
    { label: "Total No. of Houses", total: "279", male: "-", female: "-" },
    { label: "Population", total: "1,464", male: "767", female: "697" },
    { label: "Child (0-6)", total: "176", male: "108", female: "68" },
    { label: "Schedule Caste", total: "154", male: "80", female: "74" },
    { label: "Schedule Tribe", total: "539", male: "278", female: "261" },
    { label: "Literacy", total: "83.23 %", male: "90.14 %", female: "75.99 %" },
    { label: "Total Workers", total: "903", male: "454", female: "449" },
    { label: "Main Worker", total: "844", male: "-", female: "-" },
    { label: "Marginal Worker", total: "59", male: "32", female: "27" },
  ],
  mr: [
     { label: "एकूण घरांची संख्या", total: "२७९", male: "-", female: "-" },
    { label: "लोकसंख्या", total: "१,४६४", male: "७६७", female: "६९७" },
    { label: "बालक (०-६)", total: "१७६", male: "१०८", female: "६८" },
    { label: "अनुसूचित जाती", total: "१५४", male: "८०", female: "७४" },
    { label: "अनुसूचित जमाती", total: "५३९", male: "२७८", female: "२६१" },
    { label: "साक्षरता", total: "८३.२३ %", male: "९०.१४ %", female: "७५.९९ %" },
    { label: "एकूण कामगार", total: "९०३", male: "४५४", female: "४४९" },
    { label: "मुख्य कामगार", total: "८४४", male: "-", female: "-" },
    { label: "सीमांत कामगार", total: "५९", male: "३२", female: "२७" },
  ],
};

const taxTableData = {
  en: {
    heading: "Grampanchayat Tax Information",
    columns: {
      serialNo: "Serial No.",
      taxType: "Tax Type",
      previousYear: "Previous Year (Rs)",
      currentYear: "Current Year (Rs)",
      total: "Total (Rs)",
    },
    rows: [
      {
        serialNo: "01",
        taxType: "Property Tax",
        previousYear: "54,942",
        currentYear: "1,40,745",
        total: "1,95,683",
      },
      {
        serialNo: "02",
        taxType: "Sanitation/Cleaning Tax",
        previousYear: "70",
        currentYear: "565",
        total: "635",
      },
      {
        serialNo: "03",
        taxType: "Street Lighting Tax",
        previousYear: "70",
        currentYear: "565",
        total: "635",
      },
      {
        serialNo: "",
        taxType: "TOTAL:",
        previousYear: "55,082",
        currentYear: "1,41,875",
        total: "1,96,953",
      },
    ],
  },
  mr: {
    heading: "ग्रामपंचायत कर माहिती",
    columns: {
      serialNo: "अ.नं.",
      taxType: "कराचा प्रकार",
      previousYear: "मागील",
      currentYear: "चालू",
      total: "एकूण",
    },
    rows: [
      {
        serialNo: "०१",
        taxType: "घरपट्टी",
        previousYear: "५४९४२",
        currentYear: "१४०७४५",
        total: "१९५६९३",
      },
      {
        serialNo: "०२",
        taxType: "सफाईपट्टी",
        previousYear: "७०",
        currentYear: "५६५",
        total: "६३५",
      },
      {
        serialNo: "०३",
        taxType: "दिवाबत्ती",
        previousYear: "७०",
        currentYear: "५६५",
        total: "६३५",
      },
      {
        serialNo: "",
        taxType: "एकूण",
        previousYear: "५५०८२",
        currentYear: "१४२३३५",
        total: "१९६८२३",
      },
    ],
  },
};

const serviceTableData = {
  heading: "लोकसेवा हक्क अधिनियम - सेवा माहिती",
  columns: {
    serialNo: "अ. क्र.",
    serviceName: "लोकसेवेचे नाव",
    duration: "कालावधी",
    fee: "सेवा फी (रु.)",
    appointedOfficer: "पुनर्नियुक्त अधिकारी",
    firstAppellate: "प्रथम अपीलिय अधिकारी",
    secondAppellate: "द्वितीय अपीलिय अधिकारी",
  },
  rows: [
    {
      serialNo: "1",
      serviceName: "जन्म नोंद दाखला",
      duration: "7 दिवस",
      fee: "50/-",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "2",
      serviceName: "मृत्यू नोंद दाखला",
      duration: "7 दिवस",
      fee: "50/-",
      appointedOfficer: "ग्रामपंचayat अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "3",
      serviceName: "विवाह नोंद दाखला",
      duration: "7 दिवस",
      fee: "50/-",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "4",
      serviceName: "दरिद्री रेखेशी दाखला",
      duration: "7 दिवस",
      fee: "नि:शुल्क",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "5",
      serviceName: "ग्रामपंचायत घेणे बाकी नसल्याचा दाखला",
      duration: "5 दिवस",
      fee: "50/-",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "6",
      serviceName: "नमुना ८ चा उतारा",
      duration: "5 दिवस",
      fee: "50/-",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
    {
      serialNo: "7",
      serviceName: "निश्शा असल्याचा दाखला",
      duration: "20 दिवस",
      fee: "नि:शुल्क",
      appointedOfficer: "ग्रामपंचायत अधिकारी",
      firstAppellate: "सहा. गटविकास अधिकारी",
      secondAppellate: "गटविकास अधिकारी",
    },
  ],
};

const waterBudgetTableData = {
  heading: "पाणीपुरवठा जमा खर्च तेरिज सन 2025/2026",
  columns: {
    incomeHead: "जमा बाब",
    amount: "रक्कम",
    serialNo: "अ.न.",
    expenseHead: "खर्च बाब",
    expenseAmount: "रक्कम",
  },
  incomeRows: [
    { incomeHead: "सामान्य पाणीपट्टी", amount: "800/-" },
    { incomeHead: "खास पाणीपट्टी", amount: "40700/-" },
    { incomeHead: "नळ जोडणी फी", amount: "725/-" },
    { incomeHead: "बँक व्याज", amount: "135/-" },
    { incomeHead: "गावम्हळी खातेकडून जमा", amount: "12000/-" },
  ],
  expenseRows: [
    { serialNo: "1)", expenseHead: "इलेक्ट्रिक मोटर व्हिजन बिल", expenseAmount: "30386/-" },
    { serialNo: "2)", expenseHead: "टी.सी.एल. खरेदी", expenseAmount: "1900/-" },
    { serialNo: "3)", expenseHead: "इलेक्ट्रिक मोटर दुरुस्ती", expenseAmount: "6450/-" },
    { serialNo: "4)", expenseHead: "कर्मचारी मानधन", expenseAmount: "18000/-" },
  ],
  summaryRows: [
    { leftLabel: "एकूण जमा", leftValue: "54387-00", rightLabel: "एकूण खर्च", rightValue: "56736-00" },
    { leftLabel: "सूर्तवाची शिल्लक", leftValue: "16895-50", rightLabel: "अकेले शिल्लक", rightValue: "14546-50" },
    { leftLabel: "एकूण एकंदर", leftValue: "71282-50", rightLabel: "एकूण एकंदर", rightValue: "71282-50" },
  ],
};

const graminidhiBudgetTableData = {
  heading: "जमा खर्च तेरिज सन 2025/2026 ग्रामनिधी",
  columns: {
    incomeHead: "जमा बाब",
    amount: "रक्कम",
    serialNo: "अ.न.",
    expenseHead: "खर्च बाब",
    expenseAmount: "रक्कम",
  },
  incomeRows: [
    { incomeHead: "घरपट्टी", amount: "174459/-" },
    { incomeHead: "सफाई कर", amount: "865/-" },
    { incomeHead: "दिवाळी फी", amount: "865/-" },
    { incomeHead: "जमीन महसूल", amount: "9354/-" },
    { incomeHead: "बँक व्याज", amount: "579/-" },
    { incomeHead: "दाखला फी", amount: "220/-" },
    { incomeHead: "विवाह नोंदणी फी", amount: "1500/-" },
    { incomeHead: "स्वच्छता फी", amount: "500/-" },
    { incomeHead: "लोकवाणी", amount: "8694/-" },
    { incomeHead: "प्लास्टिक बंदी दंड", amount: "200/-" },
    { incomeHead: "वॉटर फिल्टर भाडे", amount: "20000/-" },
    { incomeHead: "कर्जाचे वसुली", amount: "700/-" },
  ],
  expenseRows: [
    { serialNo: "1)", expenseHead: "कर्मचारी मानधन", expenseAmount: "36000/-" },
    { serialNo: "2)", expenseHead: "सार्वजनिक स्वच्छता", expenseAmount: "3500/-" },
    { serialNo: "3)", expenseHead: "ग्रामपंचायत ISO करून", expenseAmount: "15000/-" },
    { serialNo: "4)", expenseHead: "सदस्य बैठक भत्ता", expenseAmount: "2400/-" },
    { serialNo: "5)", expenseHead: "सार्वजनिक आरोग्य", expenseAmount: "6840/-" },
    { serialNo: "6)", expenseHead: "ऑफिस सप्लाय", expenseAmount: "2050/-" },
    { serialNo: "7)", expenseHead: "ग्रा.प. कार्यालय वीजन बिल", expenseAmount: "3050/-" },
    { serialNo: "8)", expenseHead: "ग्रामनिधी वर्गणी", expenseAmount: "409/-" },
    { serialNo: "9)", expenseHead: "हस्तांतरण वर्गणी", expenseAmount: "2500/-" },
    { serialNo: "10)", expenseHead: "ग्रामिण पाणीपुरवठा खातेकडे वर्ग", expenseAmount: "1700/-" },
    { serialNo: "11)", expenseHead: "10% महिला व बालकल्याण", expenseAmount: "15300/-" },
    { serialNo: "12)", expenseHead: "15% सामाजिक खर्च", expenseAmount: "20340/-" },
    { serialNo: "13)", expenseHead: "5% दिवाळी खर्च", expenseAmount: "6265/-" },
    { serialNo: "14)", expenseHead: "डिजिटल सिग्नचर", expenseAmount: "4000/-" },
    { serialNo: "15)", expenseHead: "ई निविदा जाहिरात", expenseAmount: "5000/-" },
    { serialNo: "16)", expenseHead: "किरकळ खर्च", expenseAmount: "2000/-" },
  ],
  summaryRows: [
    { leftLabel: "एकूण जमा", leftValue: "2,17,927-00", rightLabel: "एकूण खर्च", rightValue: "136654-00" },
    { leftLabel: "सूर्तवाची शिल्लक", leftValue: "40,006-50", rightLabel: "अकेले शिल्लक", rightValue: "121279-50" },
    { leftLabel: "एकूण एकंदर", leftValue: "257933-50", rightLabel: "एकूण एकंदर", rightValue: "157933-50" },
  ],
};

const wordDocPath = "/wordfile/माहिती अधिकार  १ ते १७ मुद्दे माहिती (1).html";

function WordDocViewer() {
  const [htmlContent, setHtmlContent] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadDocument = async () => {
      try {
        const response = await fetch(encodeURI(wordDocPath));
        if (!response.ok) {
          throw new Error(`Failed to fetch document: ${response.statusText}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");

        doc.querySelectorAll("style, meta, link").forEach((node) => node.remove());
        doc.querySelectorAll("[class],[style],[lang],[align],[width],[border],[cellspacing],[cellpadding]").forEach((node) => {
          node.removeAttribute("class");
          node.removeAttribute("style");
          node.removeAttribute("lang");
          node.removeAttribute("align");
          node.removeAttribute("width");
          node.removeAttribute("border");
          node.removeAttribute("cellspacing");
          node.removeAttribute("cellpadding");
        });

        doc.querySelectorAll("img").forEach((img) => {
          const src = img.getAttribute("src") || "";
          if (src) {
            const absoluteUrl = new URL(src, window.location.origin + wordDocPath).href;
            img.setAttribute("src", absoluteUrl);
            img.style.maxWidth = "100%";
            img.style.height = "auto";
          }
        });

        setHtmlContent(doc.body.innerHTML);
      } catch (fetchError) {
        console.error(fetchError);
        setError("Unable to load the information document.");
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, []);

  if (loading) {
    return (
      <div className="mt-10 rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
        Loading information document...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-10 rounded-lg border border-red-200 bg-red-50 p-6 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-blue-900 mb-4">सूचना अधिकार दस्तऐवज</h2>
      <div className="overflow-x-auto rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
        <div className="word-doc-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </section>
  );
}

interface LanguageProps {
  language: string;
  setLanguage: (s: "en" | "mr") => void;
}

export default function VillageInfo({ language, setLanguage }: LanguageProps) {
  const t = tableData[language as keyof typeof tableData];
  const taxT = taxTableData[language as keyof typeof taxTableData];

  const waterBudgetRows = Array.from(
    { length: Math.max(waterBudgetTableData.incomeRows.length, waterBudgetTableData.expenseRows.length) },
    (_, idx) => ({
      income: waterBudgetTableData.incomeRows[idx],
      expense: waterBudgetTableData.expenseRows[idx],
    })
  );

  const graminidhiBudgetRows = Array.from(
    { length: Math.max(graminidhiBudgetTableData.incomeRows.length, graminidhiBudgetTableData.expenseRows.length) },
    (_, idx) => ({
      income: graminidhiBudgetTableData.incomeRows[idx],
      expense: graminidhiBudgetTableData.expenseRows[idx],
    })
  );

  return (
    <>
      <NavigationHeader language={language} onLanguageChange={setLanguage} />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Village Statistics
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Our village is a thriving community with rich cultural heritage and
          modern amenities. We are committed to sustainable development and
          improving the quality of life for all residents.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {villageStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow border border-orange-100 p-6 flex flex-col items-start"
            >
              <span className="text-2xl mb-2">{stat.icon}</span>
              <span className="font-semibold text-gray-700">{stat.label}</span>
              <span
                className={`text-3xl font-bold mt-2 ${stat.color}`}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Table */}
        <h2 className="text-xl font-semibold text-blue-900 mb-4">
          Bramhangaon Vanas Data
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border border-blue-100">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">Particulars</th>
                <th className="py-3 px-4 text-left">Total</th>
                <th className="py-3 px-4 text-left">Male</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">Female</th>
              </tr>
            </thead>
            <tbody>
              {t.map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {row.label}
                  </td>
                  <td className="py-2 px-4">{row.total}</td>
                  <td className="py-2 px-4">{row.male}</td>
                  <td className="py-2 px-4">{row.female}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2 className="text-xl font-semibold text-blue-900 mt-10 mb-4">
          {taxT.heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border border-blue-100">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">
                  {taxT.columns.serialNo}
                </th>
                <th className="py-3 px-4 text-left">{taxT.columns.taxType}</th>
                <th className="py-3 px-4 text-left">
                  {taxT.columns.previousYear}
                </th>
                <th className="py-3 px-4 text-left">
                  {taxT.columns.currentYear}
                </th>
                <th className="py-3 px-4 text-left rounded-tr-lg">
                  {taxT.columns.total}
                </th>
              </tr>
            </thead>
            <tbody>
              {taxT.rows.map((row, idx) => (
                <tr
                  key={`${row.taxType}-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {row.serialNo}
                  </td>
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {row.taxType}
                  </td>
                  <td className="py-2 px-4 font-semibold">{row.previousYear}</td>
                  <td className="py-2 px-4 font-semibold">{row.currentYear}</td>
                  <td className="py-2 px-4 font-semibold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-blue-900 mt-10 mb-4">
          {serviceTableData.heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border border-blue-100">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">
                  {serviceTableData.columns.serialNo}
                </th>
                <th className="py-3 px-4 text-left">{serviceTableData.columns.serviceName}</th>
                <th className="py-3 px-4 text-left">{serviceTableData.columns.duration}</th>
                <th className="py-3 px-4 text-left">{serviceTableData.columns.fee}</th>
                <th className="py-3 px-4 text-left">{serviceTableData.columns.appointedOfficer}</th>
                <th className="py-3 px-4 text-left">{serviceTableData.columns.firstAppellate}</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">
                  {serviceTableData.columns.secondAppellate}
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceTableData.rows.map((row, idx) => (
                <tr
                  key={`${row.serviceName}-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {row.serialNo}
                  </td>
                  <td className="py-2 px-4 font-medium text-gray-700">
                    {row.serviceName}
                  </td>
                  <td className="py-2 px-4">{row.duration}</td>
                  <td className="py-2 px-4">{row.fee}</td>
                  <td className="py-2 px-4">{row.appointedOfficer}</td>
                  <td className="py-2 px-4">{row.firstAppellate}</td>
                  <td className="py-2 px-4">{row.secondAppellate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-blue-900 mt-10 mb-4">
          {waterBudgetTableData.heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border border-blue-100">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">{waterBudgetTableData.columns.incomeHead}</th>
                <th className="py-3 px-4 text-left">{waterBudgetTableData.columns.amount}</th>
                <th className="py-3 px-4 text-left">{waterBudgetTableData.columns.serialNo}</th>
                <th className="py-3 px-4 text-left">{waterBudgetTableData.columns.expenseHead}</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">{waterBudgetTableData.columns.expenseAmount}</th>
              </tr>
            </thead>
            <tbody>
              {waterBudgetRows.map(({ income, expense }, idx) => (
                <tr
                  key={`water-row-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">{income?.incomeHead || ""}</td>
                  <td className="py-2 px-4">{income?.amount || ""}</td>
                  <td className="py-2 px-4 text-gray-700 font-medium">{expense?.serialNo || ""}</td>
                  <td className="py-2 px-4">{expense?.expenseHead || ""}</td>
                  <td className="py-2 px-4">{expense?.expenseAmount || ""}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {waterBudgetTableData.summaryRows.map((row, idx) => (
                <tr
                  key={`water-summary-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">{row.leftLabel}</td>
                  <td className="py-2 px-4">{row.leftValue}</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4 font-medium text-gray-700">{row.rightLabel}</td>
                  <td className="py-2 px-4">{row.rightValue}</td>
                </tr>
              ))}
            </tfoot>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-blue-900 mt-10 mb-4">
          {graminidhiBudgetTableData.heading}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow border border-blue-100">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">{graminidhiBudgetTableData.columns.incomeHead}</th>
                <th className="py-3 px-4 text-left">{graminidhiBudgetTableData.columns.amount}</th>
                <th className="py-3 px-4 text-left">{graminidhiBudgetTableData.columns.serialNo}</th>
                <th className="py-3 px-4 text-left">{graminidhiBudgetTableData.columns.expenseHead}</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">{graminidhiBudgetTableData.columns.expenseAmount}</th>
              </tr>
            </thead>
            <tbody>
              {graminidhiBudgetRows.map(({ income, expense }, idx) => (
                <tr
                  key={`grami-row-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">{income?.incomeHead || ""}</td>
                  <td className="py-2 px-4">{income?.amount || ""}</td>
                  <td className="py-2 px-4 text-gray-700 font-medium">{expense?.serialNo || ""}</td>
                  <td className="py-2 px-4">{expense?.expenseHead || ""}</td>
                  <td className="py-2 px-4">{expense?.expenseAmount || ""}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {graminidhiBudgetTableData.summaryRows.map((row, idx) => (
                <tr
                  key={`grami-summary-${idx}`}
                  className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}
                >
                  <td className="py-2 px-4 font-medium text-gray-700">{row.leftLabel}</td>
                  <td className="py-2 px-4">{row.leftValue}</td>
                  <td className="py-2 px-4"></td>
                  <td className="py-2 px-4 font-medium text-gray-700">{row.rightLabel}</td>
                  <td className="py-2 px-4">{row.rightValue}</td>
                </tr>
              ))}
            </tfoot>
          </table>
        </div>
        <WordDocViewer />
      </div>
    </>
  );
}
