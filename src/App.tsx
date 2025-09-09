import { Badge } from "./components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Mail, Phone, Github, Linkedin, MapPin, Calendar, Award, Building2, GraduationCap } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU3MzE0ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional headshot"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="mb-2">Varshith Manchikanti</h1>
              <p className="text-muted-foreground mb-4">Lead Data Engineer & AI Architect</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>+91-7416760120</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>varshith528@live.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Github className="w-4 h-4" />
                  <span>github.com/varshithr</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Linkedin className="w-4 h-4" />
                  <span>linkedin.com/in/varshithr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-6xl space-y-12">
        {/* Summary Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Accomplished and certified Data Engineer & Architect with 10+ years of experience designing, orchestrating, and streamlining large-scale data engineering and analytics solutions. Demonstrated track record in leveraging AI/GenAI to automate processes, accelerate insights, and drive innovation across finance, telecom, retail, and healthcare domains.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {/* Franklin Templeton */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Lead Data Engineer</CardTitle>
                    <p className="text-muted-foreground">Franklin Templeton Investments</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, India</span>
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>Aug 2020 – Present</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Orchestrated deployment of a Copilot Studio–powered chatbot for Compliance, earning runner-up in a global PoC showcase</li>
                  <li>Engineered a Streamlit application to classify and enrich third-party distribution data via Databricks Llama endpoints and Crew.ai, accelerating data quality efforts</li>
                  <li>Migrated Azure Databricks workloads (ADLS Gen2) to AWS with UC workflow upgrades during a major cloud consolidation—streamlined operations across teams</li>
                  <li>Implemented a production-grade, fine-tuned SparkNLP NER solution, standardizing entity extraction at minimal cost</li>
                  <li>Spearheaded Xceptor-based automation of 105+ internal processes, realizing 260 man-days in annual savings and significantly reducing error rates</li>
                </ul>
              </CardContent>
            </Card>

            {/* SpringML */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Senior Data Engineer</CardTitle>
                    <p className="text-muted-foreground">SpringML Inc.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, India</span>
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>Nov 2018 – Aug 2020</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Architected and optimized end-to-end ML pipelines on GCP (Kubeflow, TFX, Composer), enabling seamless model training & serving</li>
                  <li>Developed ETL jobs to ingest and transform terabyte-scale data into BigQuery, Bigtable, and Cloud Storage—accelerating analytics readiness</li>
                  <li>Designed and deployed Angular/React UIs and Python Flask back-ends on App Engine for real-time dashboards and data APIs</li>
                  <li>Migrated legacy Hadoop workloads to GCP Dataproc, streamlining Spark job orchestration and reducing infrastructure costs</li>
                </ul>
                <div className="mt-4">
                  <h4 className="mb-2">Key Clients:</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>Publishers Clearing House:</strong> Automated ML model lifecycle (Kubeflow, KFServing) with CI/CD, yielding $142K annual savings</div>
                    <div><strong>CBRE Inc.:</strong> Engineered secure GCP VPCs, VPNs, Dataflow pipelines, and BigQuery schemas for enterprise data migration</div>
                    <div><strong>iHuddl Investments:</strong> Built real-time dashboards (Angular, D3.js), WebSocket data pipelines, and scalable App Engine services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ScriptBees */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Senior Software Engineer</CardTitle>
                    <p className="text-muted-foreground">ScriptBees IT Pvt Ltd.</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, India</span>
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>Feb 2017 – Oct 2018</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Designed PySpark architectures and authored fuzzy-logic engines for invoice processing (EY GST solution)</li>
                  <li>Scraped and structured multi-source news data using BeautifulSoup and Dryscrape for a regional media portal (PTI/INS)</li>
                  <li>Developed RPA bots (Automagica, Python) and integrated testing pipelines via Jenkins for Verizon Wireless process automation</li>
                </ul>
              </CardContent>
            </Card>

            {/* Tech Mahindra */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Software Engineer</CardTitle>
                    <p className="text-muted-foreground">Tech Mahindra Limited</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Hyderabad, India</span>
                    <Calendar className="w-4 h-4 ml-2" />
                    <span>Sept 2014 – Jan 2017</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Processed and provisioned OSS/BSS orders for TalkTalk & BT integration, enhancing order-tracking portals</li>
                  <li>Led data exploration, feature engineering (SciPy, Pandas), and visualization (Matplotlib) for retail analytics on the X-Retail platform</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Programming & Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "Flask", "Django", "FastAPI", "PySpark", "Keras"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Data & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["GCP", "Azure", "AWS", "Dataflow", "Dataproc", "Snowflake", "MongoDB", "DynamoDB", "CosmosDB", "PostgreSQL", "Oracle"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">MLOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Kubeflow", "MLflow", "TFX", "Airflow", "CI/CD", "GitLab", "Jenkins"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Containerization & Orchestration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Databricks", "StreamSets", "Power Automate"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tools & Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Databricks Mosaic AI", "Crew.ai", "LangChain", "Copilot Studio", "Grafana", "Metabase"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Domain Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Financial Services", "Healthcare", "Retail & E-Commerce", "Telecommunications", "OSS/BSS"].map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education & Projects Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4>M.Tech in Software Systems (Data Analytics)</h4>
                <p className="text-sm text-muted-foreground">Birla Institute of Technology & Science, Pilani</p>
              </div>
              <Separator />
              <div>
                <h4>B.Tech in Computer Science</h4>
                <p className="text-sm text-muted-foreground">JNTU College of Engineering, Pulivendula</p>
              </div>
            </CardContent>
          </Card>

          {/* Projects & Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Projects & Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4>GenAI Agent Framework</h4>
                <p className="text-sm text-muted-foreground">Built a custom Mosaic AI orchestration for data quality triage</p>
              </div>
              <Separator />
              <div>
                <h4>ZPL Rendering Engine</h4>
                <p className="text-sm text-muted-foreground">Developed a Python-based ZPL-to-image converter</p>
              </div>
              <Separator />
              <div>
                <h4>Community Engagement</h4>
                <p className="text-sm text-muted-foreground">Regular speaker and organizer at Hyderabad Data Community hackathons</p>
              </div>
              <Separator />
              <div>
                <h4>Chatbot Innovator</h4>
                <p className="text-sm text-muted-foreground">Created a Copilot Studio–driven Compliance chatbot for Franklin Templeton</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Leadership & Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Project Management", "Process Automation", "Cross-functional Collaboration", "Innovation & Problem-Solving"].map((skill) => (
                <Badge key={skill} variant="outline">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 mt-12">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Varshith Manchikanti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}