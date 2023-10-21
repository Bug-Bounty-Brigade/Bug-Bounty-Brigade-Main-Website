import PageLayout from "@/components/PageLayout";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bug Bounty Brigade - Blogs",
  description: "See the latest blogs in Bug Bounty Brigade",
};
const Blog = () => {
  return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-2xl text-yellow-500">
          Coming Soon
        </p>
      </div>
    </PageLayout>
  );
};

export default Blog;
