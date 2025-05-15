
import React from "react";

const ComparisonSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute left-1/4 top-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Why This Approach Works When Others Haven't
          </h2>
          
          {/* Comparison Table */}
          <div className="overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-gray-900/60 backdrop-blur-sm text-pink-500">What We Measure</th>
                  <th className="text-left p-4 bg-gray-900/60 backdrop-blur-sm text-gray-400">What Others Don't</th>
                  <th className="text-left p-4 bg-gray-900/60 backdrop-blur-sm text-pink-500">Your Mix → Pulse Academy Mix</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Precise stem-level comparison</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">General "sounds good" approach</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Guessing at issues → <strong className="text-pink-300">Knowing exactly what to fix</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Exact harmonic structures</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">Basic chord theory</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Amateur progressions → <strong className="text-pink-300">Pro-level voicings</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Specific frequency relationships</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">Vague EQ suggestions</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Muddy, unclear mix → <strong className="text-pink-300">Defined, powerful sound</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Measurable dynamic profiles</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">"Add some compression"</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Inconsistent dynamics → <strong className="text-pink-300">Controlled, intentional impact</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Phase relationships between elements</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">Ignored entirely</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Phase conflicts → <strong className="text-pink-300">Coherent, powerful mix</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Objective spectral balance</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">Subjective listening only</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Unbalanced spectrum → <strong className="text-pink-300">Commercial-grade clarity</strong>
                  </td>
                </tr>
                
                <tr className="border-t border-gray-800">
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-white font-medium">Complete vocal processing chain</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">General "depends on the vocalist" advice</td>
                  <td className="p-4 bg-gray-900/30 backdrop-blur-sm text-gray-300">
                    Buried/harsh vocals → <strong className="text-pink-300">Clear, present, professional</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Differentiator Summary */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Differentiator Summary
            </h3>
            <p className="text-gray-300">
              The key difference is that we don't just tell you what sounds good – we show you exactly how to achieve it through objective analysis. While other approaches rely on subjective opinions, we give you measurable targets based on successful commercial releases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
