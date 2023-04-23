import Layout from "@/components/Layout";
import Prayertime from "@/components/Dashboard/Prayertime";
import AboutUs from "@/components/Dashboard/AboutUs";
import ContactInfo from "@/components/Dashboard/ContactInfo";
import Footer from "@/components/Dashboard/Footer";

export default function Home() {
  return (
    <div className="bg-[#CBE4DE]">
      <Layout>
        <div className="bg-[#2E4F4F] w-full h-full p-8 rounded-t-[30px] mt-1 text-white">
          <h1 className="font-heading text-center mb-4 text-[38px]">
            Assalamu Alaikum
          </h1>
          <p className="font-heading text-center w-[50%] mx-auto pb-3 text-[18px]">
            Abu Huraira reported: The Messenger of Allah, peace and blessings be
            upon him, said: <br />
            <br />
            وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ
            بِهِ طَرِيقًا إِلَى الْجَنَّةِ وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ
            مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ وَيَتَدَارَسُونَهُ
            بَيْنَهُمْ إِلاَّ نَزَلَتْ عَلَيْهِمُ السَّكِينَةُ وَغَشِيَتْهُمُ
            الرَّحْمَةُ وَحَفَّتْهُمُ الْمَلاَئِكَةُ وَذَكَرَهُمُ اللَّهُ
            فِيمَنْ عِنْدَهُ
            <br />
            <br />
            Whoever travels a path in search of knowledge, Allah will make easy
            for him a path to Paradise. People do not gather in the houses of
            Allah, reciting the book of Allah and studying it together, but that
            tranquility will descend upon them, mercy will cover them, angels
            will surround them, and Allah will mention them to those near him.
          </p>
        </div>
        <div className="mb-8">
          <Prayertime />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <ContactInfo />
        </div>
        <div>
          <Footer />
        </div>
      </Layout>
    </div>
  );
}
