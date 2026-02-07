import { humanize } from "@/lib/utils/textConverter";
import { markdownify } from "@/lib/utils/textConverter";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
      {feature_list.map((item, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-lg bg-surface p-6 shadow-lg hover:shadow-xl hover:shadow-secondary/50 transition-all hover:scale-105"
          >
            <div>
              <div className="flex flex-row items-center">
                <h3 className="break-all text-sm md:text-lg">{item.title}</h3>
              </div>
              <p dangerouslySetInnerHTML={{__html: markdownify(item.content)}}></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
